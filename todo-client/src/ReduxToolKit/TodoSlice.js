import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api, setAuthHeader } from "../Utils/ApiUrl";

/** getAllTasks */
export const fetchTasks = createAsyncThunk("task/fetchTasks", async ({ status }) => {
    setAuthHeader(localStorage.getItem("jwt"), api)
    try {
        const { data } = await api.get("/api/tasks", {
            params: { status },
        });
        console.log('Fetch Taks: ', data);
        return data;
    } catch (error) {
        console.log(error);
        throw Error(error.response.data.error)
    }
})

/** getAssignedUserTask */
export const fetchUsersTasks = createAsyncThunk("task/fetchUsersTasks", async ({ status }) => {
    setAuthHeader(localStorage.getItem("jwt"), api)
    try {
        const { data } = await api.get("/api/tasks/user", {
            params: { status }
        })
        console.log('Fetch User Taks: ', data);
        return data;
    } catch (error) {
        console.log(error);
        throw Error(error.response.data.error)
    }
})

/** getTaskById */
export const fetchTaskById = createAsyncThunk("task/fetchTaskById", async (taskId) => {
    setAuthHeader(localStorage.getItem("jwt"), api)
    try {
        const { data } = await api.get(`/api/tasks/${taskId}`);
        console.log('fetch Task By Id: ', data);
        return data;
    } catch (error) {
        console.log(error);
        throw Error(error.response.data.error)
    }
})

/** createTask */
export const createTask = createAsyncThunk("task/createTask", async (taskData) => {
    setAuthHeader(localStorage.getItem("jwt"), api);
    try {
        const { data } = await api.post(`/api/tasks/create`, taskData);
        console.log('create Task: ', data);
        return data;
    } catch (error) {
        console.log(error);
        throw Error(error.response.data.error)
    }
})

/** updateTask */
export const updateTask = createAsyncThunk("task/updateTask", async ({ id, taskData }) => {
    setAuthHeader(localStorage.getItem("jwt"), api)
    try {
        const { data } = await api.put(`/api/tasks/${id}`, taskData);
        console.log('update Task: ', data);
        return data;
    } catch (error) {
        console.log(error);
        throw Error(error.response.data.error)
    }
})

/** assignTaskToUser */
export const assignTaskToUser = createAsyncThunk("task/assignTaskToUser", async ({ id, userId }) => {
    setAuthHeader(localStorage.getItem("jwt"), api);
    try {
        const { data } = await api.put(`/api/tasks/${id}/user/${userId}/assigned`);
        console.log('assignTaskToUser: ', data);
        return data;
    } catch (error) {
        console.log(error);
        throw Error(error.response.data.error)
    }
})

/** delete Task */
export const deleteTask = createAsyncThunk("task/deleteTask", async (taskId) => {
    setAuthHeader(localStorage.getItem("jwt"), api);
    try {
        const { data } = await api.delete(`/api/tasks/${taskId}`);
        console.log('Delete Task Success: ');
        return taskId;
    } catch (error) {
        console.log(error);
        throw Error(error.response.data.error)
    }
})
const taskSlice = createSlice({
    name: "task",
    initialState: {
        tasks: [],
        loading: false,
        error: null,
        taskDetails: null,
        usersTask: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            /** fetchTasks */
            .addCase(fetchTasks.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.loading = false;
                state.tasks = action.payload
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            })
             /** fetch Task By Id */
            .addCase(fetchTaskById.fulfilled, (state, action) => {
                state.loading = false;
                state.taskDetails = action.payload
            })
            /** fetch Users Tasks */
            .addCase(fetchUsersTasks.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchUsersTasks.fulfilled, (state, action) => {
                state.loading = false;
                state.usersTask = action.payload
            })
            .addCase(fetchUsersTasks.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            })
            /** fetch create Tasks */
            .addCase(createTask.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(createTask.fulfilled, (state, action) => {
                state.loading = false;
                state.tasks.push(action.payload);
            })
            .addCase(createTask.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            })
            /** fetch Update Tasks */
            .addCase(updateTask.fulfilled, (state, action) => {
                const updatedTask = action.payload;
                state.loading = false;
                state.tasks = state.tasks.map((task) =>
                    task.id === updatedTask.id ? { ...task, ...updatedTask } : task);
            })
            /** fetch assign Task To User */
            .addCase(assignTaskToUser.fulfilled, (state, action) => {
                const updatedTask = action.payload;
                state.loading = false;
                state.tasks = state.tasks.map((task) =>
                    task.id === updatedTask.id ? { ...task, ...updatedTask } : task);
            })
            /** fetch delete Task */
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.loading = false;
                state.tasks = state.tasks.filter((task) => task.id !== action.payload);
            })
    }
})

export default taskSlice.reducer;
