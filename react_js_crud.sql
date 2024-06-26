/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 100413 (10.4.13-MariaDB)
 Source Host           : localhost:3306
 Source Schema         : react_js_crud

 Target Server Type    : MySQL
 Target Server Version : 100413 (10.4.13-MariaDB)
 File Encoding         : 65001

 Date: 26/06/2024 15:28:03
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for books
-- ----------------------------
DROP TABLE IF EXISTS `books`;
CREATE TABLE `books`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `desc` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `cover` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `price` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `status` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of books
-- ----------------------------
INSERT INTO `books` VALUES (2, 'Haerin', 'Newjeans Haerin Book', 'https://i.ebayimg.com/images/g/qOQAAOSw9dpkLS6O/s-l400.jpg', '190000', 'true');
INSERT INTO `books` VALUES (4, 'Minji', 'Newjeans Minji Book', 'https://m.media-amazon.com/images/I/51exb6FztaL.jpg', '150000', 'false');
INSERT INTO `books` VALUES (5, 'Danielle', 'Newjeans Danielle Book', 'https://m.media-amazon.com/images/I/6137QMd0y1L._AC_UF894,1000_QL80_.jpg', '99999', 'false');
INSERT INTO `books` VALUES (6, 'Hyein', 'Newjeans Hyein Book', 'https://m.media-amazon.com/images/I/51gLTLT8dWL._UF1000,1000_QL80_.jpg', '280000', 'true');
INSERT INTO `books` VALUES (8, 'Hanni', 'Newjeans Hanni Book', 'https://m.media-amazon.com/images/I/51X2To2rO9L.jpg', '180000', 'true');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'geza', 'geza@gmail.com', '12345678');
INSERT INTO `user` VALUES (2, 'reza', 'reza@gmail.com', '12345678');
INSERT INTO `user` VALUES (3, 'Zayyan', 'zayyan@gmail.com', '12345678');
INSERT INTO `user` VALUES (4, 'ayuk', 'ayuk@gmail.com', '12345678');
INSERT INTO `user` VALUES (5, 'rizky', 'rizky@gmail.com', '12345678');
INSERT INTO `user` VALUES (6, 'dion', 'dion@gmail.com', '12345678');
INSERT INTO `user` VALUES (7, 'fitri', 'fitri@gmail.com', '12345678');
INSERT INTO `user` VALUES (8, 'ella', 'ella@gmail.com', '12345678');
INSERT INTO `user` VALUES (9, 'solo', 'solo@gmail.com', '12345678');

SET FOREIGN_KEY_CHECKS = 1;
