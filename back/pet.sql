/*
Navicat MySQL Data Transfer

Source Server         : 666
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : pet

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-12-26 20:06:41
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for allimg
-- ----------------------------
DROP TABLE IF EXISTS `allimg`;
CREATE TABLE `allimg` (
  `goodsId` int(50) NOT NULL,
  `goodsImg` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `id` int(10) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=150 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of allimg
-- ----------------------------
INSERT INTO `allimg` VALUES ('1222222', './src/assets/proprietary/3.jpg', '9');
INSERT INTO `allimg` VALUES ('1222222', './src/assets/proprietary/4.jpg', '10');
INSERT INTO `allimg` VALUES ('1111111', './src/assets/proprietary/1.jpg', '7');
INSERT INTO `allimg` VALUES ('1111111', './src/assets/proprietary/2.jpg', '8');
INSERT INTO `allimg` VALUES ('1222223', './src/assets/proprietary/5.jpg', '11');
INSERT INTO `allimg` VALUES ('1222223', './src/assets/proprietary/6.jpg', '12');
INSERT INTO `allimg` VALUES ('1222224', './src/assets/proprietary/7.jpg', '17');
INSERT INTO `allimg` VALUES ('1222225', './src/assets/proprietary/9.jpg', '18');
INSERT INTO `allimg` VALUES ('1222226', './src/assets/proprietary/12.jpg', '19');
INSERT INTO `allimg` VALUES ('1222227', './src/assets/proprietary/13.jpg', '20');
INSERT INTO `allimg` VALUES ('1222228', './src/assets/proprietary/16.jpg', '21');
INSERT INTO `allimg` VALUES ('1222229', './src/assets/proprietary/17.jpg', '22');
INSERT INTO `allimg` VALUES ('1222230', './src/assets/proprietary/20.jpg', '23');
INSERT INTO `allimg` VALUES ('1222224', './src/assets/proprietary/8.jpg', '24');
INSERT INTO `allimg` VALUES ('1222225', './src/assets/proprietary/10.jpg', '25');
INSERT INTO `allimg` VALUES ('1222226', './src/assets/proprietary/11.jpg', '26');
INSERT INTO `allimg` VALUES ('1222227', './src/assets/proprietary/14.jpg', '27');
INSERT INTO `allimg` VALUES ('1222228', './src/assets/proprietary/15.jpg', '28');
INSERT INTO `allimg` VALUES ('1222229', './src/assets/proprietary/18.jpg', '29');
INSERT INTO `allimg` VALUES ('1222230', './src/assets/proprietary/19.jpg', '30');
INSERT INTO `allimg` VALUES ('1222230', './src/assets/proprietary/21.jpg', '31');
INSERT INTO `allimg` VALUES ('1222231', './src/assets/proprietary/22.jpg', '32');
INSERT INTO `allimg` VALUES ('1222231', './src/assets/proprietary/23.jpg', '33');
INSERT INTO `allimg` VALUES ('1222232', './src/assets/proprietary/24.jpg', '34');
INSERT INTO `allimg` VALUES ('1222232', './src/assets/proprietary/25.jpg', '35');
INSERT INTO `allimg` VALUES ('1222233', './src/assets/proprietary/26.jpg', '36');
INSERT INTO `allimg` VALUES ('1222233', './src/assets/proprietary/27.jpg', '37');
INSERT INTO `allimg` VALUES ('1222234', './src/assets/proprietary/28.jpg', '38');
INSERT INTO `allimg` VALUES ('1222234', './src/assets/proprietary/29.jpg', '39');
INSERT INTO `allimg` VALUES ('1222235', './src/assets/proprietary/30.jpg', '40');
INSERT INTO `allimg` VALUES ('1222235', './src/assets/proprietary/31.jpg', '41');
INSERT INTO `allimg` VALUES ('1222236', './src/assets/proprietary/32.jpg', '42');
INSERT INTO `allimg` VALUES ('1222236', './src/assets/proprietary/33.jpg', '43');
INSERT INTO `allimg` VALUES ('1222237', './src/assets/proprietary/34.jpg', '44');
INSERT INTO `allimg` VALUES ('1222237', './src/assets/proprietary/35.jpg', '45');
INSERT INTO `allimg` VALUES ('1222238', './src/assets/proprietary/36.jpg', '46');
INSERT INTO `allimg` VALUES ('1222238', './src/assets/proprietary/37.jpg', '47');
INSERT INTO `allimg` VALUES ('1222239', './src/assets/proprietary/38.jpg', '48');
INSERT INTO `allimg` VALUES ('1222239', './src/assets/proprietary/39.jpg', '49');
INSERT INTO `allimg` VALUES ('1222240', './src/assets/proprietary/40.jpg', '50');
INSERT INTO `allimg` VALUES ('1222240', './src/assets/proprietary/41.jpg', '51');
INSERT INTO `allimg` VALUES ('1222241', './src/assets/proprietary/42.jpg', '52');
INSERT INTO `allimg` VALUES ('1222241', './src/assets/proprietary/43.jpg', '53');
INSERT INTO `allimg` VALUES ('1222242', './src/assets/proprietary/44.jpg', '54');
INSERT INTO `allimg` VALUES ('1222242', './src/assets/proprietary/45.jpg', '55');
INSERT INTO `allimg` VALUES ('1222243', './src/assets/proprietary/46.jpg', '56');
INSERT INTO `allimg` VALUES ('1222243', './src/assets/proprietary/47.jpg', '57');
INSERT INTO `allimg` VALUES ('1222244', './src/assets/proprietary/48.jpg', '58');
INSERT INTO `allimg` VALUES ('1222244', './src/assets/proprietary/49.jpg', '59');
INSERT INTO `allimg` VALUES ('1222245', './src/assets/proprietary/50.jpg', '60');
INSERT INTO `allimg` VALUES ('1222245', './src/assets/proprietary/51.jpg', '61');
INSERT INTO `allimg` VALUES ('1222246', './src/assets/proprietary/52.jpg', '62');
INSERT INTO `allimg` VALUES ('1222246', './src/assets/proprietary/53.jpg', '63');
INSERT INTO `allimg` VALUES ('1222247', './src/assets/proprietary/54.jpg', '64');
INSERT INTO `allimg` VALUES ('1222247', './src/assets/proprietary/55.jpg', '65');
INSERT INTO `allimg` VALUES ('1222248', './src/assets/proprietary/56.jpg', '66');
INSERT INTO `allimg` VALUES ('1222248', './src/assets/proprietary/57.jpg', '67');
INSERT INTO `allimg` VALUES ('1222249', './src/assets/proprietary/58.jpg', '68');
INSERT INTO `allimg` VALUES ('1222249', './src/assets/proprietary/59.jpg', '69');
INSERT INTO `allimg` VALUES ('1222250', './src/assets/proprietary/60.jpg', '70');
INSERT INTO `allimg` VALUES ('1222250', './src/assets/proprietary/61.jpg', '71');
INSERT INTO `allimg` VALUES ('20', './src/assets/pet/20_1.jpg', '72');
INSERT INTO `allimg` VALUES ('20', './src/assets/pet/20_2.jpg', '73');
INSERT INTO `allimg` VALUES ('21', './src/assets/pet/21_1.jpg', '74');
INSERT INTO `allimg` VALUES ('21', './src/assets/pet/21_2.jpg', '75');
INSERT INTO `allimg` VALUES ('21', './src/assets/pet/21_3.jpg', '76');
INSERT INTO `allimg` VALUES ('22', './src/assets/pet/22_1.jpg', '77');
INSERT INTO `allimg` VALUES ('22', './src/assets/pet/22_2.jpg', '78');
INSERT INTO `allimg` VALUES ('22', './src/assets/pet/22_3.jpg', '79');
INSERT INTO `allimg` VALUES ('23', './src/assets/pet/23_1.jpg', '80');
INSERT INTO `allimg` VALUES ('23', './src/assets/pet/23_2.jpg', '81');
INSERT INTO `allimg` VALUES ('23', './src/assets/pet/23_3.jpg', '82');
INSERT INTO `allimg` VALUES ('24', './src/assets/pet/24_1.jpg', '83');
INSERT INTO `allimg` VALUES ('24', './src/assets/pet/24_2.jpg', '84');
INSERT INTO `allimg` VALUES ('25', './src/assets/pet/25_1.jpg', '85');
INSERT INTO `allimg` VALUES ('25', './src/assets/pet/25_2.jpg', '86');
INSERT INTO `allimg` VALUES ('26', './src/assets/pet/26_1.jpg', '87');
INSERT INTO `allimg` VALUES ('26', './src/assets/pet/26_2.jpg', '88');
INSERT INTO `allimg` VALUES ('27', './src/assets/pet/27_1.jpg', '89');
INSERT INTO `allimg` VALUES ('27', './src/assets/pet/27_2.jpg', '90');
INSERT INTO `allimg` VALUES ('28', './src/assets/pet/28_1.jpg', '91');
INSERT INTO `allimg` VALUES ('28', './src/assets/pet/28_2.jpg', '92');
INSERT INTO `allimg` VALUES ('28', './src/assets/pet/28_3.jpg', '93');
INSERT INTO `allimg` VALUES ('29', './src/assets/pet/29_1.jpg', '94');
INSERT INTO `allimg` VALUES ('210', './src/assets/pet/210_1.jpg', '95');
INSERT INTO `allimg` VALUES ('210', './src/assets/pet/210_2.jpg', '96');
INSERT INTO `allimg` VALUES ('210', './src/assets/pet/210_3.jpg', '97');
INSERT INTO `allimg` VALUES ('211', './src/assets/pet/211_1.jpg', '98');
INSERT INTO `allimg` VALUES ('211', './src/assets/pet/211_2.jpg', '99');
INSERT INTO `allimg` VALUES ('211', './src/assets/pet/211_3.jpg', '100');
INSERT INTO `allimg` VALUES ('212', './src/assets/pet/212_1.jpg', '101');
INSERT INTO `allimg` VALUES ('212', './src/assets/pet/212_2.jpg', '102');
INSERT INTO `allimg` VALUES ('213', './src/assets/pet/213_1.jpg', '103');
INSERT INTO `allimg` VALUES ('213', './src/assets/pet/213_2.jpg', '104');
INSERT INTO `allimg` VALUES ('213', './src/assets/pet/213_3.jpg', '105');
INSERT INTO `allimg` VALUES ('214', './src/assets/pet/214_1.jpg', '106');
INSERT INTO `allimg` VALUES ('214', './src/assets/pet/214_2.jpg', '107');
INSERT INTO `allimg` VALUES ('214', './src/assets/pet/214_3.jpg', '108');
INSERT INTO `allimg` VALUES ('215', './src/assets/pet/215_1.jpg', '109');
INSERT INTO `allimg` VALUES ('215', './src/assets/pet/215_2.jpg', '110');
INSERT INTO `allimg` VALUES ('215', './src/assets/pet/215_3.jpg', '111');
INSERT INTO `allimg` VALUES ('216', './src/assets/pet/216_1.jpg', '112');
INSERT INTO `allimg` VALUES ('216', './src/assets/pet/216_2.jpg', '113');
INSERT INTO `allimg` VALUES ('216', './src/assets/pet/216_3.jpg', '114');
INSERT INTO `allimg` VALUES ('217', './src/assets/pet/217_1.jpg', '115');
INSERT INTO `allimg` VALUES ('217', './src/assets/pet/217_2.jpg', '116');
INSERT INTO `allimg` VALUES ('217', './src/assets/pet/217_3.jpg', '117');
INSERT INTO `allimg` VALUES ('218', './src/assets/pet/218_1.jpg', '118');
INSERT INTO `allimg` VALUES ('218', './src/assets/pet/218_2.jpg', '119');
INSERT INTO `allimg` VALUES ('218', './src/assets/pet/218_3.jpg', '120');
INSERT INTO `allimg` VALUES ('219', './src/assets/pet/219_1.jpg', '121');
INSERT INTO `allimg` VALUES ('219', './src/assets/pet/219_2.jpg', '122');
INSERT INTO `allimg` VALUES ('220', './src/assets/pet/220_1.jpg', '123');
INSERT INTO `allimg` VALUES ('220', './src/assets/pet/220_2.jpg', '124');
INSERT INTO `allimg` VALUES ('221', './src/assets/pet/221_1.jpg', '125');
INSERT INTO `allimg` VALUES ('221', './src/assets/pet/221_2.jpg', '126');
INSERT INTO `allimg` VALUES ('221', './src/assets/pet/221_3.jpg', '127');
INSERT INTO `allimg` VALUES ('222', './src/assets/pet/222_1.jpg', '128');
INSERT INTO `allimg` VALUES ('222', './src/assets/pet/222_2.jpg', '129');
INSERT INTO `allimg` VALUES ('223', './src/assets/pet/223_1.jpg', '130');
INSERT INTO `allimg` VALUES ('223', './src/assets/pet/223_2.jpg', '131');
INSERT INTO `allimg` VALUES ('224', './src/assets/pet/224_1.jpg', '132');
INSERT INTO `allimg` VALUES ('224', './src/assets/pet/224_2.jpg', '133');
INSERT INTO `allimg` VALUES ('224', './src/assets/pet/224_3.jpg', '134');
INSERT INTO `allimg` VALUES ('225', './src/assets/pet/225_1.jpg', '135');
INSERT INTO `allimg` VALUES ('225', './src/assets/pet/225_2.jpg', '136');
INSERT INTO `allimg` VALUES ('225', './src/assets/pet/225_3.jpg', '137');
INSERT INTO `allimg` VALUES ('226', './src/assets/pet/226_1.jpg', '138');
INSERT INTO `allimg` VALUES ('226', './src/assets/pet/226_2.jpg', '139');
INSERT INTO `allimg` VALUES ('227', './src/assets/pet/227_1.jpg', '140');
INSERT INTO `allimg` VALUES ('227', './src/assets/pet/227_2.jpg', '141');
INSERT INTO `allimg` VALUES ('227', './src/assets/pet/227_3.jpg', '142');
INSERT INTO `allimg` VALUES ('228', './src/assets/pet/228_1.jpg', '143');
INSERT INTO `allimg` VALUES ('228', './src/assets/pet/228_2.jpg', '144');
INSERT INTO `allimg` VALUES ('229', './src/assets/pet/229_1.jpg', '145');
INSERT INTO `allimg` VALUES ('229', './src/assets/pet/229_2.jpg', '146');
INSERT INTO `allimg` VALUES ('230', './src/assets/pet/230_1.jpg', '147');
INSERT INTO `allimg` VALUES ('230', './src/assets/pet/230_2.jpg', '148');
INSERT INTO `allimg` VALUES ('230', './src/assets/pet/230_3.jpg', '149');

-- ----------------------------
-- Table structure for buyergoods
-- ----------------------------
DROP TABLE IF EXISTS `buyergoods`;
CREATE TABLE `buyergoods` (
  `orderId` varchar(255) NOT NULL,
  `goodsId` varchar(255) NOT NULL,
  `addTime` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of buyergoods
-- ----------------------------
INSERT INTO `buyergoods` VALUES ('12138', '1111111', '2017-12-24 18:19:58');
INSERT INTO `buyergoods` VALUES ('1993232322', '1222225', '2017-12-25 14:02:55');
INSERT INTO `buyergoods` VALUES ('12138', '1222224', '2017-12-24 14:40:56');
INSERT INTO `buyergoods` VALUES ('151427156449015139404677', '28', '2017-12-26 14:58:58');
INSERT INTO `buyergoods` VALUES ('151427164739415139404677', '1222230', '2017-12-26 15:00:21');
INSERT INTO `buyergoods` VALUES ('151427345407413838381438', '213', '2017-12-26 15:30:27');
INSERT INTO `buyergoods` VALUES ('151427362181013838381438', '213', '2017-12-26 15:33:15');
INSERT INTO `buyergoods` VALUES ('151427511807315625049777', '1222226', '2017-12-26 15:58:05');
INSERT INTO `buyergoods` VALUES ('151427513440815625049777', '22', '2017-12-26 15:58:22');
INSERT INTO `buyergoods` VALUES ('151427548901213188888888', '213', '2017-12-26 16:03:49');
INSERT INTO `buyergoods` VALUES ('151427556726013188888888', '1222225', '2017-12-26 16:05:08');

-- ----------------------------
-- Table structure for buyerorder
-- ----------------------------
DROP TABLE IF EXISTS `buyerorder`;
CREATE TABLE `buyerorder` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `orderId` varchar(255) NOT NULL,
  `phoneNumId` varchar(255) NOT NULL,
  `postage` varchar(255) DEFAULT NULL,
  `address` varchar(255) NOT NULL,
  `status` float(10,0) NOT NULL COMMENT '1表示未付款，2表示已付款，3表示退货',
  `addTime` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of buyerorder
-- ----------------------------
INSERT INTO `buyerorder` VALUES ('1', '12138', '15139404677', '20.00', '吉林省长春市人民大街9999号吉林省人民政府政务大厅', '2', '2017-12-21 10:30:59');
INSERT INTO `buyerorder` VALUES ('26', '151427556726013188888888', '13188888888', '118.78', '1-1-3', '2', null);
INSERT INTO `buyerorder` VALUES ('19', '151427156449015139404677', '15139404677', '561', '--', '2', null);
INSERT INTO `buyerorder` VALUES ('20', '151427164739415139404677', '15139404677', '162.99', '--', '2', null);
INSERT INTO `buyerorder` VALUES ('21', '151427345407413838381438', '13838381438', '566', '2 -1-我', '2', null);
INSERT INTO `buyerorder` VALUES ('22', '151427362181013838381438', '13838381438', '516', '--', '2', null);
INSERT INTO `buyerorder` VALUES ('23', '151427511807315625049777', '15625049777', '23', '--', '2', '2017-12-21 11:33:07');
INSERT INTO `buyerorder` VALUES ('24', '151427513440815625049777', '15625049777', '567.00', '--', '2', null);
INSERT INTO `buyerorder` VALUES ('25', '151427548901213188888888', '13188888888', '516', 'ian-134556-4344', '2', null);

-- ----------------------------
-- Table structure for history_collect
-- ----------------------------
DROP TABLE IF EXISTS `history_collect`;
CREATE TABLE `history_collect` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `phoneNumId` varchar(255) NOT NULL,
  `goodsId` int(10) NOT NULL,
  `status` float(10,0) NOT NULL COMMENT '1表示浏览历史，2表示收藏',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of history_collect
-- ----------------------------
INSERT INTO `history_collect` VALUES ('1', '123', '3', '1');
INSERT INTO `history_collect` VALUES ('5', '123', '5', '2');
INSERT INTO `history_collect` VALUES ('6', '15139404677', '1222224', '1');
INSERT INTO `history_collect` VALUES ('7', '15139404677', '1111111', '1');
INSERT INTO `history_collect` VALUES ('8', '15139404677', '1222227', '1');
INSERT INTO `history_collect` VALUES ('9', '15139404677', '1222224', '2');

-- ----------------------------
-- Table structure for pet
-- ----------------------------
DROP TABLE IF EXISTS `pet`;
CREATE TABLE `pet` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `goodsId` int(10) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phoneNum` varchar(255) NOT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `breed` varchar(255) DEFAULT NULL,
  `age` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `weight` varchar(255) DEFAULT NULL,
  `height` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `hot` float(10,0) DEFAULT NULL,
  `birthday` varchar(255) DEFAULT NULL,
  `vaccine` varchar(255) DEFAULT NULL,
  `classify` varchar(255) DEFAULT NULL,
  `addTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1910 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pet
-- ----------------------------
INSERT INTO `pet` VALUES ('4', '23', 'yy', '18312456315', '男', '博美', '2个月', '白色', '5kg', '32cm', '456.00', '13', '17-12-13', '2次', '小型犬', '2017-12-21 21:07:49');
INSERT INTO `pet` VALUES ('5', '24', 'qq', '18312902315', '女', '哈士奇', '3个月', '棕色', '26kg', '50cm', '4572.00', '23', '17-12-14', '3次', '中型犬', '2017-12-04 21:07:53');
INSERT INTO `pet` VALUES ('6', '25', 'w', '18312312005', '男', '藏獒', '4个月', '棕色', '71kg', '67cm', '4584.00', '45', '17-12-15', '4次', '大型犬', '2017-11-28 21:07:58');
INSERT INTO `pet` VALUES ('7', '26', '小米', '18312312392', '女', '北京犬', '5个月', '白色', '10kg', '30cm', '1459.00', '6', '17-12-16', '1次', '小型犬', '2017-12-07 21:08:02');
INSERT INTO `pet` VALUES ('8', '27', '小赖', '18312312322', '女', '博美犬', '1个月', '棕色', '3kg', '20cm', '460.00', '78', '17-12-17', '1次', '幼犬', '2017-12-19 21:08:06');
INSERT INTO `pet` VALUES ('9', '28', '七仔', '18642312315', '男', '巴哥犬', '1个月', '灰色', '4kg', '15cm', '461.00', '12', '17-12-18', '2次', '幼犬', '2017-12-06 21:07:07');
INSERT INTO `pet` VALUES ('10', '29', '小吴', '18312312300', '女', '贵宾犬', '8个月', '棕色', '8kg', '37cm', '462.00', '23', '17-12-19', '3次', '小型犬', '2017-12-15 21:07:03');
INSERT INTO `pet` VALUES ('11', '210', '虾米', '18312312301', '男', '雪纳瑞', '9个月', '白灰色', '6kg', '35cm', '463.00', '7', '17-12-20', '1次', '小型犬', '2017-12-09 21:06:57');
INSERT INTO `pet` VALUES ('12', '211', '小夏', '18312312302', '女', '巴哥犬', '12个月', '白色', '30kg', '25cm', '4641.00', '9', '17-12-21', '2次', '成年犬', '2017-12-08 21:06:53');
INSERT INTO `pet` VALUES ('13', '212', '小马', '18312312303', '男', '蝴蝶犬', '1个月', '白色', '4kg', '17cm', '465.00', '10', '17-12-22', '3次', '幼犬', '2017-12-05 21:06:49');
INSERT INTO `pet` VALUES ('14', '213', '小红', '18312312323', '女', '萨摩耶犬', '12个月', '白色', '30kg', '45cm', '466.00', '12', '17-12-23', '4次', '中型犬', '2018-01-09 21:06:42');
INSERT INTO `pet` VALUES ('15', '214', '花花', '18312312325', '男', '斗牛犬', '13个月', '咖啡色', '20kg', '30cm', '3467.00', '13', '17-12-24', '5次', '成年犬', '2017-12-06 21:06:37');
INSERT INTO `pet` VALUES ('16', '215', '露露', '18312312378', '女', '卡斯罗', '14个月', '黑色', '45kg', '54cm', '5468.00', '14', '17-12-25', '2次', '大型犬', '2017-11-29 21:06:31');
INSERT INTO `pet` VALUES ('17', '216', 'ez', '18312312366', '女', '恶霸犬', '15个月', '黑色', '20kg', '30cm', '1469.00', '15', '17-12-26', '3次', '成年犬', '2017-12-01 21:06:26');
INSERT INTO `pet` VALUES ('18', '217', '小芳', '18312312377', '女', '松狮', '16个月', '棕色', '20kg', '50cm', '4720.00', '16', '17-12-27', '3次', '中型犬', '2017-11-27 21:06:21');
INSERT INTO `pet` VALUES ('19', '218', '小一', '18312312388', '男', '狼青', '17个月', '灰色', '20kg', '40cm', '2471.00', '17', '17-12-28', '1次', '成年犬', '2017-11-26 21:06:15');
INSERT INTO `pet` VALUES ('20', '219', '小麦', '18312312399', '女', '藏獒', '18个月', '棕色', '65kg', '69cm', '5472.00', '18', '17-12-29', '2次', '大型犬', '2017-11-28 21:06:08');
INSERT INTO `pet` VALUES ('21', '220', '大明', '18312312111', '男', '拉布拉多', '19个月', '棕色', '30kg', '50cm', '3473.00', '19', '17-12-30', '3次', '成年犬', '2017-11-29 21:06:05');
INSERT INTO `pet` VALUES ('22', '221', '大大', '18312312555', '女', '阿富汗猎犬', '2个月', '白色', '65kg', '67cm', '4746.00', '20', '17-12-31', '4次', '大型犬', '2017-12-22 21:06:00');
INSERT INTO `pet` VALUES ('23', '222', '小龙', '18312312390', '男', '幽灵犬', '13个月', '黑色', '40kg', '50cm', '2475.00', '21', '17-12-32', '1次', '成年犬', '2017-12-20 21:05:56');
INSERT INTO `pet` VALUES ('24', '223', '小艾', '15612312315', '女', '西施犬', '1个月', '白色', '5kg', '20cm', '476.00', '23', '17-12-33', '2次', '幼犬', '2017-12-19 21:05:50');
INSERT INTO `pet` VALUES ('25', '224', 'mokey', '15912312315', '女', '哈士奇', '5个月', '白色', '25kg', '56cm', '2477.00', '24', '17-12-34', '3次', '中型犬', '2017-12-18 21:05:46');
INSERT INTO `pet` VALUES ('26', '225', '小猪', '15912312316', '男', '伯恩山犬', '6个月', '黑白色', '42kg', '65cm', '3478.00', '25', '17-12-35', '4次', '大型犬', '2017-12-17 21:05:41');
INSERT INTO `pet` VALUES ('27', '226', '小紫', '15912312317', '女', '迷你杜宾', '1个月', '黑色', '4kg', '15cm', '479.00', '26', '17-12-36', '1次', '幼犬', '2017-12-16 21:05:36');
INSERT INTO `pet` VALUES ('28', '227', '大龙', '15912312318', '女', '比利时牧羊犬', '8个月', '黑色', '34kg', '66cm', '2345.00', '27', '17-12-37', '2次', '大型犬', '2017-12-15 21:05:32');
INSERT INTO `pet` VALUES ('29', '228', '莱莱', '15912312319', '男', '秋田犬', '12个月', '棕色', '30kg', '40cm', '9999.00', '28', '17-12-38', '3次', '成年犬', '2017-12-14 21:05:28');
INSERT INTO `pet` VALUES ('30', '229', '小法', '15912312320', '女', '哈瓦那犬', '1个月', '白色', '4kg', '20cm', '6666.00', '29', '17-12-39', '4次', '幼犬', '2017-12-13 21:05:24');
INSERT INTO `pet` VALUES ('31', '230', '丸丸', '15912312321', '男', '柴犬', '11个月', '棕色', '10kg', '42cm', '3333.00', '30', '17-12-40', '5次', '中型犬', '2017-12-13 21:05:17');
INSERT INTO `pet` VALUES ('1', '20', '旺财', '18612312312', '男', '北京犬', '4个月', '棕色', '20kg', '30cm', '234.00', '23', '17-8-23', '3次', '小型犬', '2017-12-21 20:56:54');
INSERT INTO `pet` VALUES ('2', '21', '小花', '18912121211', '女', '贵宾犬', '11个月', '白色', '34kg', '35cm', '456.00', '45', '17-2-23', '2次', '小型犬', '2017-12-21 20:57:32');
INSERT INTO `pet` VALUES ('3', '22', '小花', '18312345675', '男', '泰迪', '5个月', '黑色', '30kg', '20cm', '567.00', '56', '17-4-23', '1次', '小型犬', '2017-12-21 21:00:10');
INSERT INTO `pet` VALUES ('32', '23', 'ay', '18312456315', '男', '博美', '5个月', '白色', '20kg', '20cm', '3456.00', '123', '17-2-23', '2次', '小型犬', '2017-12-21 21:01:41');
INSERT INTO `pet` VALUES ('33', '24', 'qq', '18312902315', '男', '哈士奇', '6个月', '棕色', '26kg', '23cm', '4567.00', '234', '17-1-23 ', '3次', '小型犬', '2017-12-21 21:03:41');

-- ----------------------------
-- Table structure for proprietary
-- ----------------------------
DROP TABLE IF EXISTS `proprietary`;
CREATE TABLE `proprietary` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `goodsId` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `saleQty` int(10) NOT NULL,
  `keepNum` int(11) NOT NULL,
  `birth` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `keepDate` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `addTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of proprietary
-- ----------------------------
INSERT INTO `proprietary` VALUES ('17', '1222223', '幼犬 泰迪比熊贵宾吉娃娃狗狗衣服 两脚衣四脚衣', '衣服', '35.00', '622', '3432', '2007-11-27 00:00:00', null, '2017-12-21 10:38:51');
INSERT INTO `proprietary` VALUES ('15', '1111111', '怡亲多可特 椭圆舒适短毛绒猫窝狗窝', '狗窝', '20.00', '67', '125', '2007-11-21 00:00:00', null, '2017-12-21 10:30:59');
INSERT INTO `proprietary` VALUES ('19', '1222222', '成年 泰迪比熊贵宾吉娃娃狗狗衣服 两脚衣四脚衣', '衣服', '47.00', '622', '3432', '2007-11-27 00:00:00', null, '2017-12-21 10:41:17');
INSERT INTO `proprietary` VALUES ('20', '1222224', '中型犬 塑料宠物窝 附赠软棉垫 澡盆两用窝', '狗窝', '49.00', '1323', '232', '2017-01-26 00:00:00', null, '2017-12-21 11:33:07');
INSERT INTO `proprietary` VALUES ('21', '1222225', '中型犬 玉米粒宠物狗狗窝 全套可拆洗 更暖更厚实', '狗窝', '68.78', '2432', '4343', '2017-11-20 00:00:00', null, '2017-12-21 11:33:07');
INSERT INTO `proprietary` VALUES ('22', '1222226', '小型犬 捣蛋鬼 蛋形宠物窝 内附海绵垫、网格垫', '狗窝', '108.00', '121', '4343', '2017-11-21 00:00:00', null, '2017-12-21 11:33:07');
INSERT INTO `proprietary` VALUES ('23', '1222227', '小型犬 德丰Dog\'s life 宠物强力防水雨衣 全包型雨衣狗衣服', '衣服', '66.88', '2323', '2132', '2017-11-22 00:00:00', null, '2017-12-21 11:33:07');
INSERT INTO `proprietary` VALUES ('24', '1222228', '通用 爱宝嘉 夏季宠物冰凉床垫 冰垫', '狗窝', '67.88', '324', '2132', '2017-11-23 00:00:00', null, '2017-12-21 11:33:07');
INSERT INTO `proprietary` VALUES ('25', '1222229', '幼犬 德丰Dog\'s life 彩菊迷情宠物生理裤', '衣服', '43.87', '3532', '433', '2017-11-24 00:00:00', null, '2017-12-21 11:33:07');
INSERT INTO `proprietary` VALUES ('26', '1222230', '幼犬 伊丽Elite 圆点蒙古包LWF-2120', '狗窝', '112.99', '342', '1211', '2017-11-25 00:00:00', null, '2017-12-21 11:33:07');
INSERT INTO `proprietary` VALUES ('27', '1222231', '小型犬 怡亲 猫狗动物小帽', '衣服', '43.98', '3232', '1112', '2017-11-26 00:00:00', null, '2017-12-21 11:33:07');
INSERT INTO `proprietary` VALUES ('28', '1222232', '宝路 成犬精选鲜肝妙鲜包湿粮包100g 狗湿粮', '狗粮', '3.87', '232', '112', '2017-11-27 00:00:00', '2018-04-27 00:00:00', '2017-12-21 11:33:07');
INSERT INTO `proprietary` VALUES ('29', '1222233', '成年犬 顽皮Wanpy happy100牛肉慕斯狗罐头95g 狗湿粮', '狗粮', '4.50', '323', '112', '2017-11-28 00:00:00', '2018-04-28 00:00:00', '2017-12-21 11:33:07');
INSERT INTO `proprietary` VALUES ('30', '1222234', '怡亲Yoken 成犬牛肉蔬菜湿粮110g', '狗粮', '5.50', '3232', '121', '2017-10-18 00:00:00', '2018-06-18 00:00:00', '2017-12-21 11:33:07');
INSERT INTO `proprietary` VALUES ('31', '1222235', '怡亲Yoken 幼犬三文鱼炖鸡湿粮110g', '狗粮', '6.50', '231', '2321', '2017-10-19 00:00:00', '2018-06-19 00:00:00', '2017-12-21 11:33:07');
INSERT INTO `proprietary` VALUES ('32', '1222236', '爱丽思IRIS 牛肉米饭狗罐头100g*3罐 狗湿粮', '狗粮', '14.90', '4322', '2234', '2017-10-20 00:00:00', '2018-06-20 00:00:00', '2017-12-21 11:33:07');
INSERT INTO `proprietary` VALUES ('33', '1222237', '顽皮Wanpy happy100系列成犬牛肉午餐肉鲜封包70g 狗湿粮', '狗粮', '2.50', '321', '222', '2017-10-21 00:00:00', '2018-06-21 00:00:00', '2017-12-21 11:33:07');
INSERT INTO `proprietary` VALUES ('34', '1222238', '怡亲Yoken 牛肉蔬菜配方狗罐头375g 狗湿粮', '狗粮', '8.10', '232', '1131', '2017-10-22 00:00:00', '2018-06-22 00:00:00', '2017-12-21 11:33:07');
INSERT INTO `proprietary` VALUES ('35', '1222239', '怡亲Yoken 半湿粮成犬抗过敏配方100g', '狗粮', '3.60', '2221', '11', '2017-10-23 00:00:00', '2018-06-23 00:00:00', '2017-12-21 11:33:07');
INSERT INTO `proprietary` VALUES ('36', '1222240', '爱丽思IRIS 牛肉野菜狗罐头100g 狗湿粮', '狗粮', '5.00', '7686', '663', '2017-10-24 00:00:00', '2018-06-24 00:00:00', '2017-12-21 11:33:07');
INSERT INTO `proprietary` VALUES ('37', '1222241', '福来恩 犬猫灭蜱虫跳蚤喷剂250ml 猫狗体外驱虫药', '医疗', '166.00', '1332', '2123', '2017-10-25 00:00:00', '2019-10-25 00:00:00', '2017-12-21 11:33:07');
INSERT INTO `proprietary` VALUES ('38', '1222242', '小宠EHD 洁耳舒50ml 滴耳液洗耳水预防耳螨耳炎', '医疗', '22.00', '44', '23', '2017-10-26 00:00:00', '2019-10-26 00:00:00', '2017-12-21 11:33:07');
INSERT INTO `proprietary` VALUES ('39', '1222243', '福来恩犬心保 牛肉块11kg内小型犬体内驱虫药整盒 蛔虫钩虫心丝虫打虫药', '医疗', '126.33', '22', '213', '2017-10-27 00:00:00', '2019-10-27 00:00:00', '2017-12-21 11:33:07');
INSERT INTO `proprietary` VALUES ('40', '1222244', '福来恩 20-40kg大型犬增效滴剂2.68ML 单支无说明书 驱杀跳蚤蜱虫虫卵幼虫', '医疗', '55.00', '435', '454', '2017-10-28 00:00:00', '2019-10-28 00:00:00', '2017-12-21 11:33:07');
INSERT INTO `proprietary` VALUES ('41', '1222245', '福来恩 犬猫灭蜱虫跳蚤喷剂100ml 猫狗体外驱虫药', '医疗', '92.00', '232', '231', '2017-10-29 00:00:00', '2019-10-29 00:00:00', '2017-12-21 11:33:07');
INSERT INTO `proprietary` VALUES ('42', '1222246', '雷米高Ramical 驱虫一粒清猫狗广谱驱虫药打虫药1片装 线虫绦虫吸虫等体内寄生虫感染', '医疗', '9.99', '222', '1123', '2017-10-30 00:00:00', '2019-10-30 00:00:00', '2017-12-21 11:33:07');
INSERT INTO `proprietary` VALUES ('43', '1222247', '法国维克Virbac 必除 犬用除螨除蜱项圈', '医疗', '62.00', '1132', '12', '2017-10-31 00:00:00', '2019-10-31 00:00:00', '2017-12-21 11:33:07');
INSERT INTO `proprietary` VALUES ('44', '1222248', '福来恩犬心保 牛肉块12kg-22kg内中型犬体内驱虫药整盒 蛔虫钩虫心丝虫打虫药', '医疗', '156.00', '232', '8', '2017-11-01 00:00:00', '2019-11-01 00:00:00', '2017-12-21 11:33:07');
INSERT INTO `proprietary` VALUES ('45', '1222249', '法国维克Virbac 耳漂耳部护理125ml 清洁耳道', '医疗', '126.99', '213', '121', '2017-11-02 00:00:00', '2019-11-02 00:00:00', '2017-12-21 11:33:07');
INSERT INTO `proprietary` VALUES ('46', '1222250', '特瑞仕 薄荷牙膏套装100g 清洁口腔清新口气去口臭牙菌斑牙结石', '医疗', '35.88', '121', '213', '2017-11-03 00:00:00', '2019-11-03 00:00:00', '2017-12-21 11:33:07');

-- ----------------------------
-- Table structure for pub
-- ----------------------------
DROP TABLE IF EXISTS `pub`;
CREATE TABLE `pub` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `texx` varchar(255) DEFAULT NULL,
  `phoneNum` varchar(255) DEFAULT NULL,
  `imgCan` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=376 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pub
-- ----------------------------
INSERT INTO `pub` VALUES ('368', '买猫', '13172050157', 'gd2.png');
INSERT INTO `pub` VALUES ('369', '冒魔撒', '13172050157', 'detail2.png');
INSERT INTO `pub` VALUES ('370', '冒魔撒', '13172050157', 'detail2.png');
INSERT INTO `pub` VALUES ('371', '111111111', '15139404677', 'a1.png');
INSERT INTO `pub` VALUES ('372', '求购信息：', '15139404677', 's3.png');
INSERT INTO `pub` VALUES ('373', '雪纳瑞', '13838381438', 's4.png');
INSERT INTO `pub` VALUES ('374', '求购', '13188888888', 'a1.png');
INSERT INTO `pub` VALUES ('375', '88888888888', '13188888888', 'gd2.png');

-- ----------------------------
-- Table structure for sellergoods
-- ----------------------------
DROP TABLE IF EXISTS `sellergoods`;
CREATE TABLE `sellergoods` (
  `orderId` varchar(255) NOT NULL,
  `goodsId` varchar(255) NOT NULL,
  `addTime` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sellergoods
-- ----------------------------
INSERT INTO `sellergoods` VALUES ('123456', '213', '2017-12-24 15:23:58');
INSERT INTO `sellergoods` VALUES ('123456', '214', '2017-12-24 15:24:18');
INSERT INTO `sellergoods` VALUES ('123456', '215', '2017-12-24 15:24:29');

-- ----------------------------
-- Table structure for sellerorder
-- ----------------------------
DROP TABLE IF EXISTS `sellerorder`;
CREATE TABLE `sellerorder` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `orderId` varchar(255) NOT NULL,
  `phoneNumId` varchar(255) NOT NULL,
  `status` float(10,0) NOT NULL COMMENT '1表示未付款，2表示已付款，3表示退货',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sellerorder
-- ----------------------------
INSERT INTO `sellerorder` VALUES ('1', '123456', '18688554911', '2');

-- ----------------------------
-- Table structure for staff
-- ----------------------------
DROP TABLE IF EXISTS `staff`;
CREATE TABLE `staff` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `addTime` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of staff
-- ----------------------------
INSERT INTO `staff` VALUES ('2', '胡弯弯', '123456', '员工', '2017-12-26 13:25:25');
INSERT INTO `staff` VALUES ('3', 'huwan', '1111', '员工', '2017-12-26 16:11:26');
INSERT INTO `staff` VALUES ('4', 'huwanwan', 'hww', '管理员', '2017-12-26 19:17:19');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `phoneNum` varchar(255) NOT NULL,
  `iden` varchar(255) DEFAULT NULL,
  `idenImg` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `headImg` varchar(255) DEFAULT NULL,
  `addTime` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=54 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '123', '123', null, '18312456315', '123', null, null, '123', null, '2017-12-20 12:12:44');
INSERT INTO `user` VALUES ('2', '余生', '123', null, '18312345675', null, null, null, '广东省茂名市三好小区20号', null, '2017-12-20 12:24:46');
INSERT INTO `user` VALUES ('3', '', 'hww', null, 'huwanwan', null, null, null, '1234', null, '2017-12-20 12:25:04');
INSERT INTO `user` VALUES ('4', null, 'f0ee226443c92644bd871ff19a6ec4b1', null, 'huwanwan', null, null, null, '广东省茂名市三好小区20号', null, '2017-12-20 17:27:11');
INSERT INTO `user` VALUES ('5', null, '202cb962ac59075b964b07152d234b70', null, '123', null, null, null, '广东省茂名市三好小区20号', null, '2017-12-20 17:48:32');
INSERT INTO `user` VALUES ('6', null, '0985251f3d13076beec69aca778ea31f', null, '123123a', null, null, null, '广东省茂名市三好小区20号', null, '2017-12-21 11:41:12');
INSERT INTO `user` VALUES ('24', null, '765db3384473ce7f91da447cc8adc7ee', null, '18312345672', null, null, null, null, null, '2017-12-22 16:29:18');
INSERT INTO `user` VALUES ('25', null, '123456', null, '18312312392', null, null, null, '广东省茂名市三好小区20号', null, '2017-12-22 17:03:37');
INSERT INTO `user` VALUES ('26', null, '21314', null, '18312312322', null, null, null, '广东省茂名市三好小区20号', null, '2017-12-22 17:03:53');
INSERT INTO `user` VALUES ('27', null, '2345', null, '18642312315', null, null, null, '广东省茂名市三好小区20号', null, '2017-12-22 17:04:05');
INSERT INTO `user` VALUES ('28', null, '56678', null, '18312312300', null, null, null, '广东省茂名市三好小区20号', null, '2017-12-22 17:04:16');
INSERT INTO `user` VALUES ('29', null, '12345', null, '18312312301', null, null, null, '广东省茂名市三好小区20号', null, '2017-12-22 17:04:31');
INSERT INTO `user` VALUES ('30', null, '7890', null, '18312312302', null, null, null, '广东省茂名市三好小区20号', null, '2017-12-22 17:04:41');
INSERT INTO `user` VALUES ('31', null, '435647', null, '18312312303', null, null, null, '广东省茂名市三好小区20号', null, '2017-12-22 17:05:00');
INSERT INTO `user` VALUES ('32', null, '3235324', null, '18312312323', null, null, null, '广东省茂名市三好小区20号', null, '2017-12-22 17:05:09');
INSERT INTO `user` VALUES ('33', null, '12345', null, '18312312325', null, null, null, '广东省茂名市三好小区20号', null, '2017-12-22 17:05:19');
INSERT INTO `user` VALUES ('34', null, '12341', null, '18312312378', null, null, null, '广东省茂名市三好小区20号', null, '2017-12-22 17:05:29');
INSERT INTO `user` VALUES ('35', null, '123123', null, '18312312366', null, null, null, '广东省茂名市三好小区20号', null, '2017-12-22 17:05:40');
INSERT INTO `user` VALUES ('36', null, '988989', null, '18312312377', null, null, null, '广东省茂名市三好小区20号', null, '2017-12-22 17:05:51');
INSERT INTO `user` VALUES ('37', null, '67869', null, '18312312388', null, null, null, '广东省茂名市三好小区20号', null, '2017-12-22 17:06:00');
INSERT INTO `user` VALUES ('38', null, '123124', null, '18312312399', null, null, null, '广东省茂名市三好小区20号', null, '2017-12-22 17:06:15');
INSERT INTO `user` VALUES ('39', null, '789780', null, '18312312111', null, null, null, '广东省茂名市三好小区20号', null, '2017-12-22 17:06:26');
INSERT INTO `user` VALUES ('40', null, '12312', null, '18312312555', null, null, null, '广东省茂名市三好小区20号', null, '2017-12-22 17:06:45');
INSERT INTO `user` VALUES ('41', null, '56757', null, '18312312390', null, null, null, '广东省茂名市三好小区20号', null, '2017-12-22 17:06:54');
INSERT INTO `user` VALUES ('42', null, '12314', null, '15612312315', null, null, null, '广东省茂名市三好小区20号', null, '2017-12-22 17:07:03');
INSERT INTO `user` VALUES ('43', null, '456756', null, '15912312315', null, null, null, '广东省茂名市三好小区20号', null, '2017-12-22 17:07:12');
INSERT INTO `user` VALUES ('44', null, '1234', null, '15912312316', null, null, null, '广东省茂名市三好小区20号', null, '2017-12-22 17:07:21');
INSERT INTO `user` VALUES ('45', null, '12341', null, '15912312317', null, null, null, '广东省茂名市三好小区20号', null, '2017-12-22 17:07:32');
INSERT INTO `user` VALUES ('46', null, 'yuioiu', null, '15912312318', null, null, null, '广东省茂名市三好小区20号', null, '2017-12-22 17:07:48');
INSERT INTO `user` VALUES ('47', null, '12314', null, '15912312319', null, null, null, '广东省茂名市三好小区20号', null, '2017-12-22 17:08:07');
INSERT INTO `user` VALUES ('48', null, 'sdf', null, '15912312320', null, null, null, '广东省茂名市三好小区20号', null, '2017-12-22 17:08:23');
INSERT INTO `user` VALUES ('49', null, 'sdfs', null, '15912312321', null, null, null, '广东省茂名市三好小区20号', null, '2017-12-22 17:08:33');
INSERT INTO `user` VALUES ('50', null, 'werwet', null, '18612312312', null, null, null, '广东省茂名市三好小区20号', null, '2017-12-22 17:08:44');
INSERT INTO `user` VALUES ('51', null, 'sdfsd', null, '18912121211', null, null, null, '广东省茂名市三好小区20号', null, '2017-12-22 17:09:14');
INSERT INTO `user` VALUES ('52', null, '123214', null, '18312456315', null, null, null, '广东省茂名市三好小区20号', null, '2017-12-22 17:09:23');
INSERT INTO `user` VALUES ('53', null, '23425', null, '18312902315', null, null, null, '广东省茂名市三好小区20号', null, '2017-12-22 17:09:33');
