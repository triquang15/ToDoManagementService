CREATE DATABASE  IF NOT EXISTS `task_service` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `task_service`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: task_service
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `task`
--

DROP TABLE IF EXISTS `task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `task` (
  `id` bigint NOT NULL,
  `assign_user_id` bigint DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `dead_line` datetime(6) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `status` tinyint DEFAULT NULL,
  `tags` varbinary(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `task_chk_1` CHECK ((`status` between 0 and 5))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task`
--

LOCK TABLES `task` WRITE;
/*!40000 ALTER TABLE `task` DISABLE KEYS */;
INSERT INTO `task` VALUES (102,53,'2024-02-18 17:35:41.658481','2024-02-18 05:20:00.000000','Full Practice Exam included + explanations | Learn Cloud Computing | Pass the AWS Cloud Practitioner CLF-C02 exam!','https://media.istockphoto.com/id/1481564527/photo/computer-laptop-and-dashboard-for-data-document-management-system-on-cloud-online.jpg?s=1024x1024&w=is&k=20&c=G77e2T0s_tdaFnIiD4J2eXG5-UKvnZEvjftW0MdX7fU=',5,_binary '¨\Ì\0sr\0java.util.ArrayListxÅ\“ô\«aù\0I\0sizexp\0\0\0w\0\0\0t\0Angulart\0Pythonx','Ultimate AWS Certified Cloud Practitioner CLF-C02'),(103,52,'2024-02-18 17:44:35.010740','2024-02-27 10:00:00.000000','Harness the Power of Google\'s Gemini Pro Vision LLM for Cutting-edge Applications: Project-based Learning with Python','https://media.istockphoto.com/id/1483145419/vector/modern-web-banner-business-data-and-investment-analysis-on-laptop-with-dashboard-ui-interface.jpg?s=612x612&w=0&k=20&c=i69XoFex4Xdxv_leyugHc8_CDdQXwEUQTV0MZGdr1yc=',5,_binary '¨\Ì\0sr\0java.util.ArrayListxÅ\“ô\«aù\0I\0sizexp\0\0\0w\0\0\0t\0Web Developmentt\0Pythont\0Javax','Master Google\'s Gemini API with Python'),(104,NULL,'2024-02-18 17:46:19.277343','2024-02-29 05:00:00.000000','Learn the magic of Java Spring Framework with Spring Boot, Spring JDBC, Spring AOP, Hibernate, JUnit & Mockito','https://media.istockphoto.com/id/1487694862/vector/vector-laptop-mockup-finance-and-trading-online-application-concept-laptop-and-stock-chart.jpg?s=612x612&w=0&k=20&c=bHn5FqqHkd3XmycJQM9TA0I56YyZKKzRzuQwUi8JS9k=',3,_binary '¨\Ì\0sr\0java.util.ArrayListxÅ\“ô\«aù\0I\0sizexp\0\0\0w\0\0\0t\0Javat\0Web Developmentx','Spring Framework Master Class - Java Spring the Modern Way'),(105,NULL,'2024-02-18 17:47:47.744871','2024-02-29 05:00:00.000000','Data Lake Mastery using AWS: A Shortcut to Success in Big Data, Cloud Data Engineering and Data Architecture','https://media.istockphoto.com/id/1327530129/vector/using-a-smartphone-with-a-business-schedule-and-analytical-data-on-a-mobile-phone-analysis.jpg?s=612x612&w=0&k=20&c=n2kHRI8_hJiXxt3baXaQxMC_XNG-rcIIIgg5dImrkHY=',3,_binary '¨\Ì\0sr\0java.util.ArrayListxÅ\“ô\«aù\0I\0sizexp\0\0\0w\0\0\0t\0Pythont\0C#t\0Web Developmentx','Data Lake Mastery: The Key to Big Data & Data Engineering'),(106,2,'2024-02-18 17:50:28.322397','2024-02-21 22:00:00.000000','Connecting and working with Oracle cloud DBaaS using command line tool, Toad for Oracle, SQL Developer and C Program.','https://media.istockphoto.com/id/1810794133/photo/data-analyst-working-on-business-analytics-dashboard-with-charts-with-kpi-and-metrics.jpg?s=612x612&w=0&k=20&c=VBI7tdzZ4P2Q77gdnaThgHkCXdDcPJMaC2DmZpQtjrg=',5,_binary '¨\Ì\0sr\0java.util.ArrayListxÅ\“ô\«aù\0I\0sizexp\0\0\0w\0\0\0t\0Pythont\0Angulart\0Javax','Connecting and working with Oracle Cloud DBaaS'),(107,2,'2024-02-18 17:52:06.123990','2024-02-26 00:00:00.000000','Learn the fundamentals of Azure, and get certified, with this complete beginner\'s AZ-900 course, includes practice test!','https://media.istockphoto.com/id/1571174670/photo/data-analyst-working-on-business-analytics-dashboard-with-charts-with-kpi-and-metrics.jpg?s=612x612&w=0&k=20&c=5bCXMjK9DHO_mxc9l2hRUKqn4SC6EeWWo_oVtjltok0=',5,_binary '¨\Ì\0sr\0java.util.ArrayListxÅ\“ô\«aù\0I\0sizexp\0\0\0w\0\0\0t\0C#t\0React Jst\0Angularx','AZ-900: Microsoft Azure Fundamentals Exam Prep - JAN 2024'),(152,53,'2024-02-19 08:47:58.158001','2024-02-28 17:00:00.000000','Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included.','https://media.istockphoto.com/id/1390561686/vector/crypto-currency-virtual-electronic-internet-money-bitcoin-currency-crypto-coin-with-growth.jpg?s=612x612&w=0&k=20&c=6Z7YSJ6qr27E6FHJxdq9o3kFnPcku-KZ82Ac5XdokRA=',5,_binary '¨\Ì\0sr\0java.util.ArrayListxÅ\“ô\«aù\0I\0sizexp\0\0\0w\0\0\0t\0Angulart\0Pythont\0Javax','Machine Learning A-Z: AI, Python & R + ChatGPT Prize [2024]');
/*!40000 ALTER TABLE `task` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task_seq`
--

DROP TABLE IF EXISTS `task_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `task_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task_seq`
--

LOCK TABLES `task_seq` WRITE;
/*!40000 ALTER TABLE `task_seq` DISABLE KEYS */;
INSERT INTO `task_seq` VALUES (251);
/*!40000 ALTER TABLE `task_seq` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-20  9:36:20
CREATE DATABASE  IF NOT EXISTS `task_user_service` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `task_user_service`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: task_user_service
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'triquang@gmail.com','Tri Quang','$2a$10$J9B/YU0N1zmr74C863cu8eiLecEvIgjBGYCgCeOLW3azM3MIAj4CS','ROLE_ADMIN'),(2,'messi@gmail.com','Leo Messi','$2a$10$DJLVBqiFmB/07Ri0kBbYBOC7QWSeSyR7KkF1FjLjARyHQGMyg6etC','ROLE_USER'),(52,'Raviprasad@gmail.com','Raviprasad Naik','$2a$10$0MFi4r.EJnWw9/ISzeVzA.bzmh0PRcx201qLV3kpsQyfTw8ceQvXa','ROLE_USER'),(53,'DeeptiSaxena@gmail.com','Deepti Saxena','$2a$10$xVHliqbB0cL/MucPda1V6.Nh/S8O1axVH.A4plmzufLSRw.Mo22lG','ROLE_USER');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_seq`
--

DROP TABLE IF EXISTS `users_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_seq`
--

LOCK TABLES `users_seq` WRITE;
/*!40000 ALTER TABLE `users_seq` DISABLE KEYS */;
INSERT INTO `users_seq` VALUES (151);
/*!40000 ALTER TABLE `users_seq` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-20  9:36:20
CREATE DATABASE  IF NOT EXISTS `task_submission_service` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `task_submission_service`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: task_submission_service
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `submission`
--

DROP TABLE IF EXISTS `submission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `submission` (
  `id` bigint NOT NULL,
  `github_link` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `submission_time` datetime(6) DEFAULT NULL,
  `task_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `submission`
--

LOCK TABLES `submission` WRITE;
/*!40000 ALTER TABLE `submission` DISABLE KEYS */;
INSERT INTO `submission` VALUES (1,'https://www.google.com/','APPROVED','2024-02-19 16:45:17.651955',107,2),(2,'https://www.google.com/','REJECTED','2024-02-19 16:47:35.246076',107,2),(3,'https://www.google.com/','REJECTED','2024-02-19 16:48:55.209360',107,2),(52,'https://www.youtube.com/','APPROVED','2024-02-19 17:32:55.164541',107,2),(102,'https://jira.dxc.com/','APPROVED','2024-02-20 09:24:54.515747',152,53),(103,'https://github.com/','APPROVED','2024-02-20 09:25:41.774448',102,53),(104,'https://github.com/','APPROVED','2024-02-20 09:28:31.112761',152,53);
/*!40000 ALTER TABLE `submission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `submission_seq`
--

DROP TABLE IF EXISTS `submission_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `submission_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `submission_seq`
--

LOCK TABLES `submission_seq` WRITE;
/*!40000 ALTER TABLE `submission_seq` DISABLE KEYS */;
INSERT INTO `submission_seq` VALUES (201);
/*!40000 ALTER TABLE `submission_seq` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-20  9:36:20
