import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api, setAuthHeader } from "../Utils/ApiUrl";

/** submit Task*/
export const submitTask = createAsyncThunk("submission/submitTask", async ({ taskId, githubLink }) => {
    setAuthHeader(localStorage.getItem("jwt"), api);
    try {
        const { data } = await api.post(`/api/submissions?taskId=${taskId}&githubLink=${githubLink}`, {});
        console.log('submitTask', data);
        return data
    } catch (error) {
        console.log(error);
        throw Error(error.response.data.error)
    }
})

/** fetchAllSubmissions Task*/
export const fetchAllSubmissions = createAsyncThunk("submission/fetchAllSubmissions",
    async () => {
        setAuthHeader(localStorage.getItem("jwt") ,api);
        try {
            const { data } = await api.get(`/api/submissions`, {});
            console.log('submitTask', data);
            return data
        } catch (error) {
            console.log(error);
            throw Error(error.response.data.error)
        }
    })

/** getSubmissionByTaskId Task*/
export const getSubmissionByTaskId = createAsyncThunk("submission/getSubmissionByTaskId",
    async (taskId) => {
        setAuthHeader(localStorage.getItem("jwt"),api);
        try {
            const { data } = await api.get(`/api/submissions/task/${taskId}`, {});
            console.log('get Submission By TaskId', data);
            return data
        } catch (error) {
            console.log(error);
            throw Error(error.response.data.error)
        }
    })

/** acceptSubmission Task*/
export const acceptSubmission = createAsyncThunk("submission/acceptSubmission",
    async ({ id, status }) => {
        setAuthHeader(localStorage.getItem("jwt"), api);
        try {
            const { data } = await api.put(`/api/submissions/${id}?status=${status}`, {});
            console.log('acceptSubmission', data);
            return data
        } catch (error) {
            console.log(error);
            throw Error(error.response.data.error)
        }
    })

const submissionSlice = createSlice({
    name: 'submission',
    initialState: {
        submissions: [],
        status: '',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            /** submit Task */
            .addCase(submitTask.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(submitTask.fulfilled, (state, action) => {
                state.status = 'success';
                state.submissions.push(action.payload);
            })
            .addCase(submitTask.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            /** fetchAllSubmissions Task */
            .addCase(fetchAllSubmissions.fulfilled, (state, action) => {
                state.status = 'success';
                state.submissions = action.payload;
            })
            .addCase(fetchAllSubmissions.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            /** get Submission By TaskId */
            .addCase(getSubmissionByTaskId.fulfilled, (state, action) => {
                state.status = 'success';
                state.submissions = action.payload;
            })
            /** accept Submission Task */
            .addCase(acceptSubmission.fulfilled, (state, action) => {
                state.status = 'success';
                state.submissions = state.submissions.map((item) =>
                    item.id !== action.payload.id ? item : action.payload);
            })
    }
});

export default submissionSlice.reducer;