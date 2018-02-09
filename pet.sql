/*
Navicat MySQL Data Transfer

Source Server         : EPet
Source Server Version : 50617
Source Host           : 10.3.136.55:3306
Source Database       : pet

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2018-02-09 14:47:24
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for activity
-- ----------------------------
DROP TABLE IF EXISTS `activity`;
CREATE TABLE `activity` (
  `activityId` varchar(11) NOT NULL COMMENT '精选活动',
  `activityName` varchar(255) DEFAULT NULL COMMENT '精选活动名字',
  `activityImg` varchar(255) DEFAULT NULL COMMENT '精选活动大图',
  `category` varchar(255) DEFAULT NULL,
  `referral` varchar(255) DEFAULT NULL COMMENT '品牌介绍',
  `detailsImg` varchar(255) DEFAULT NULL COMMENT '进入商品显示详情图',
  PRIMARY KEY (`activityId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of activity
-- ----------------------------
INSERT INTO `activity` VALUES ('atv01', '玫斯 METZ', '../../src/assets/img/active/ActiviteItem/964b3cac5dd580e06b431c347871eadc.jpg', '1', null, '../../src/assets/img/active/ActiviteItem/12293bf1258b4f7bbff6e2ee72a39d38.jpg');
INSERT INTO `activity` VALUES ('atv02', '纯粹 PURICH', '../../src/assets/img/active/ActiviteItem/a079295154f4d0cdfe272a515edef950.jpg', '1', null, '../../src/assets/img/active/ActiviteItem/ff4bd6db1717694f4367fc6ba1f2c597.jpg');
INSERT INTO `activity` VALUES ('atv03', '萌宠cos变装pa', '../../src/assets/img/active/ActiviteItem/4c8a0defd37d3739053edccff2610789.jpg', '2', '百变萌宠变装秀', '../../src/assets/img/active/ActiviteItem/11b3ea55699068a0f57d0e5f2bbcc780.jpg');
INSERT INTO `activity` VALUES ('atv04', '宠物有嘻哈', '../../src/assets/img/active/ActiviteItem/75a1e5bdfb4c4c67956e8729b2cb3c04.jpg', '2', '勒是潮汪代表', '../../src/assets/img/active/ActiviteItem/89ffa07c52da6ecda42c36857b6cd443.jpg');
INSERT INTO `activity` VALUES ('atv05', '谁还不是个小公举', '../../src/assets/img/active/ActiviteItem/c8bb77235f9a0753d89e5f5c5d1895fe.jpg', '2', '买3件送头花精美礼盒', '../../src/assets/img/active/ActiviteItem/6416330371394d6cdbccde01bd07cf42.jpg');
INSERT INTO `activity` VALUES ('atv06', '菩施康', '../../src/assets/img/active/ActiviteItem/3eec2ba6637050cb04f85481aa3475a2.jpg', '3', null, '../../src/assets/img/active/ActiviteItem/36b7f5217839b6397cbc9762fda929f5.jpg');
INSERT INTO `activity` VALUES ('atv07', 'AKC', '../../src/assets/img/active/ActiviteItem/f2563c57293cf5205d7c341a4087f8d4.jpg', '3', null, '../../src/assets/img/active/ActiviteItem/ba5f85ca863d9b5f3972910741bb9652.jpg');
INSERT INTO `activity` VALUES ('atv08', 'K9 零食', '../../src/assets/img/active/ActiviteItem/438657a510c0a2b15e775f3b972ed0d9.jpg', '4', null, '../../src/assets/img/active/ActiviteItem/573797a37114c539de8a9837dfe309a1.jpg');
INSERT INTO `activity` VALUES ('atv09', '日用百货', '../../src/assets/img/active/ActiviteItem/b9e23e1068adc63d376f72bfc1636762.jpg', '5', null, '../../src/assets/img/active/ActiviteItem/1635e367c6500bf112dca0f308533c8d.jpg');

-- ----------------------------
-- Table structure for activitygoodimg
-- ----------------------------
DROP TABLE IF EXISTS `activitygoodimg`;
CREATE TABLE `activitygoodimg` (
  `activitygoodId` varchar(255) DEFAULT NULL,
  `goodImgId` varchar(255) NOT NULL,
  `goodImgUrl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`goodImgId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of activitygoodimg
-- ----------------------------
INSERT INTO `activitygoodimg` VALUES ('good01', '1', '../../src/assets/img/active/goods/4c73986b159b8d4341a2e7a8b9374143.jpg');
INSERT INTO `activitygoodimg` VALUES ('good10', '10', '../../src/assets/img/active/goods/0ccd99ffaeac49a15d33d7beed57e6c3.jpg');
INSERT INTO `activitygoodimg` VALUES ('good11', '11', '../../src/assets/img/active/goods/c9301cf60c5b0dc64ef2117ad34fcbd4.jpg');
INSERT INTO `activitygoodimg` VALUES ('good12', '12', '../../src/assets/img/active/goods/38ece791f70a9a8e0c20c6b44f37c7bc.jpg');
INSERT INTO `activitygoodimg` VALUES ('good13', '13', '../../src/assets/img/active/goods/0652ffcc1eeb8ccbf43e40ca646ee2c2.jpg');
INSERT INTO `activitygoodimg` VALUES ('good14', '14', '../../src/assets/img/active/goods/e20f3afdb309215d21b2493d82cba6c2.jpg');
INSERT INTO `activitygoodimg` VALUES ('good15', '15', '../../src/assets/img/active/goods/111e76453726abf2d8dd6b9a3fc35cad.jpg');
INSERT INTO `activitygoodimg` VALUES ('good16', '16', '../../src/assets/img/active/goods/659e5051fae184c5df36edc89a1d6d09.jpg');
INSERT INTO `activitygoodimg` VALUES ('good17', '17', '../../src/assets/img/active/goods/44aa70615f228a014fd0344edeae0790.jpg');
INSERT INTO `activitygoodimg` VALUES ('good18', '18', '../../src/assets/img/active/goods/760d2fa2225090d27d346f04f21cfeb0.jpg');
INSERT INTO `activitygoodimg` VALUES ('good19', '19', '../../src/assets/img/active/goods/94e80952676d7a31d228648950e2e6f5.jpg');
INSERT INTO `activitygoodimg` VALUES ('good02', '2', '../../src/assets/img/active/goods/8e93c89c58ea0afb7814af756dde6bac.jpg');
INSERT INTO `activitygoodimg` VALUES ('good20', '20', '../../src/assets/img/active/goods/db74f274885ef6ba0c32eede256d9f2b.jpg');
INSERT INTO `activitygoodimg` VALUES ('good21', '21', '../../src/assets/img/active/goods/5ad82a3543bbe6ef1c018f8145966a7e.jpg');
INSERT INTO `activitygoodimg` VALUES ('good22', '22', '../../src/assets/img/active/goods/9e970c807c4226fa9944b9ab34f6ba61.jpg');
INSERT INTO `activitygoodimg` VALUES ('good23', '23', '../../src/assets/img/active/goods/b4e7a06b2086b116944e3b1930c57891.jpg');
INSERT INTO `activitygoodimg` VALUES ('good24', '24', '../../src/assets/img/active/goods/988fd3a5bb86108a577644836e47393d.jpg');
INSERT INTO `activitygoodimg` VALUES ('good25', '25', '../../src/assets/img/active/goods/a114582b12d560a58c92329ed1cd1f58.jpg');
INSERT INTO `activitygoodimg` VALUES ('good26', '26', '../../src/assets/img/active/goods/3d58fa90512c59333596ab9a93d93371.jpg');
INSERT INTO `activitygoodimg` VALUES ('good27', '27', '../../src/assets/img/active/goods/c513017692c80c1c8c3aedd24053984f.jpg');
INSERT INTO `activitygoodimg` VALUES ('good28', '28', '../../src/assets/img/active/goods/a290db2c6fbd88425bab69006bf755a3.png');
INSERT INTO `activitygoodimg` VALUES ('good29', '29', '../../src/assets/img/active/goods/064641df58382472469aa2ffe8f3fa0c.jpg');
INSERT INTO `activitygoodimg` VALUES ('good03', '3', '../../src/assets/img/active/goods/68eaa578ba9d7786b801330535d44b35.jpg');
INSERT INTO `activitygoodimg` VALUES ('good30', '30', '../../src/assets/img/active/goods/ff882ca6617c1ceba907948618ccdf80.jpg');
INSERT INTO `activitygoodimg` VALUES ('good31', '31', '../../src/assets/img/active/goods/925a72e4325261c56fad3f003d5180d2.jpg');
INSERT INTO `activitygoodimg` VALUES ('good32', '32', '../../src/assets/img/active/goods/767fd8081888bdbe85074a3550e0cb6a.jpg');
INSERT INTO `activitygoodimg` VALUES ('good33', '33', '../../src/assets/img/active/goods/0a2f07462ea3ae0a708c4712403d061a.jpg');
INSERT INTO `activitygoodimg` VALUES ('good34', '34', '../../src/assets/img/active/goods/e8f9c3905dbc09d60b5af66fdee0fd47.jpg');
INSERT INTO `activitygoodimg` VALUES ('good35', '35', '../../src/assets/img/active/goods/3f6396b911ebcaad16a079f4dff5d22c.jpg');
INSERT INTO `activitygoodimg` VALUES ('good36', '36', '../../src/assets/img/active/goods/d96f664335234d9859483b659860e854.jpg');
INSERT INTO `activitygoodimg` VALUES ('good37', '37', '../../src/assets/img/active/goods/2f4ab9d19ed0ed111a64883fc71002a1.jpg');
INSERT INTO `activitygoodimg` VALUES ('good38', '38', '../../src/assets/img/active/goods/0877783ae5e0f854cf5ceaecca8807e2.jpg');
INSERT INTO `activitygoodimg` VALUES ('good39', '39', '../../src/assets/img/active/goods/0a93a85d8a4939f975d67fb15320bc9c.jpg');
INSERT INTO `activitygoodimg` VALUES ('good04', '4', '../../src/assets/img/active/goods/e2c6304c4271623adda50c7a1d6a283b.jpg');
INSERT INTO `activitygoodimg` VALUES ('good40', '40', '../../src/assets/img/active/goods/fc1c19cdabaf9be84a026244711a01ed.jpg');
INSERT INTO `activitygoodimg` VALUES ('good41', '41', '../../src/assets/img/active/goods/35b5b8863517e2dc2d1f7e272d7c97c5.jpg');
INSERT INTO `activitygoodimg` VALUES ('good42', '42', '../../src/assets/img/active/goods/95a2cb3f0fb2ae38a6abddc4efb8141b.jpg');
INSERT INTO `activitygoodimg` VALUES ('good43', '43', '../../src/assets/img/active/goods/5721794ee54336bb1a5a7345c8d3352c.jpg');
INSERT INTO `activitygoodimg` VALUES ('good44', '44', '../../src/assets/img/active/goods/018ad8b816047ceec54e141a52843b43.jpg');
INSERT INTO `activitygoodimg` VALUES ('good45', '45', '../../src/assets/img/active/goods/db489f011e8f4eca8178a1b8f7c22fb7.jpg');
INSERT INTO `activitygoodimg` VALUES ('good46', '46', '../../src/assets/img/active/goods/0d8c8914019ac2d840ddc0db3ab64c1e.jpg');
INSERT INTO `activitygoodimg` VALUES ('good47', '47', '../../src/assets/img/active/goods/20305a1d4d48523bf03adf5ad6950f41.jpg');
INSERT INTO `activitygoodimg` VALUES ('good48', '48', '../../src/assets/img/active/goods/38c6baa4ce329818b14717b0aba38b6f.jpg');
INSERT INTO `activitygoodimg` VALUES ('good49', '49', '../../src/assets/img/active/goods/aacf5bbc304cd5d076e1d9e63f06e7ce.jpg');
INSERT INTO `activitygoodimg` VALUES ('good05', '5', '../../src/assets/img/active/goods/1014e813c6e56cf3e2170dcf58105cc0.jpg');
INSERT INTO `activitygoodimg` VALUES ('good50', '50', '../../src/assets/img/active/goods/74535438ffee4e28f3f374855003ec01.jpg');
INSERT INTO `activitygoodimg` VALUES ('good51', '51', '../../src/assets/img/active/goods/03fe97c86dced8c865c3c998c1fdab74.jpg');
INSERT INTO `activitygoodimg` VALUES ('good52', '52', '../../src/assets/img/active/goods/3bb32e54e58edb863f23964b157b423a.jpg');
INSERT INTO `activitygoodimg` VALUES ('good53', '53', '../../src/assets/img/active/goods/8b3cec01cbba6261124f14895465a970.jpg');
INSERT INTO `activitygoodimg` VALUES ('good54', '54', '../../src/assets/img/active/goods/f5d1c4915fe17190df3d372f9a98e9d3.jpg');
INSERT INTO `activitygoodimg` VALUES ('good55', '55', '../../src/assets/img/active/goods/848db708e64045effcc0bfa6180fe30a.jpg');
INSERT INTO `activitygoodimg` VALUES ('good06', '6', '../../src/assets/img/active/goods/e5969f50a14ea92b2d1470c47b154f10.jpg');
INSERT INTO `activitygoodimg` VALUES ('good07', '7', '../../src/assets/img/active/goods/9b4301b8fc15adb7fb110545c53ea286.jpg');
INSERT INTO `activitygoodimg` VALUES ('good08', '8', '../../src/assets/img/active/goods/e9e36f8b86bb8aaac02e9242a814561d.jpg');
INSERT INTO `activitygoodimg` VALUES ('good09', '9', '../../src/assets/img/active/goods/7dd229ee03e407cdeb9a72f502c68a6c.jpg');

-- ----------------------------
-- Table structure for activitygoods
-- ----------------------------
DROP TABLE IF EXISTS `activitygoods`;
CREATE TABLE `activitygoods` (
  `activitygoodId` varchar(255) NOT NULL,
  `goodName` varchar(255) DEFAULT NULL,
  `originPrice` float(10,0) DEFAULT NULL,
  `Price` float(10,0) DEFAULT NULL,
  `size` varchar(10) DEFAULT NULL,
  `describe` varchar(255) DEFAULT NULL,
  `activityId` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`activitygoodId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of activitygoods
-- ----------------------------
INSERT INTO `activitygoods` VALUES ('good01', '玫斯METZ 小型犬肠道护理粮 1.36kg(3lb)', '103', '51', '1.36kg', '易消化 好吸收 呵护泪腺 减少泪痕', 'atv01');
INSERT INTO `activitygoods` VALUES ('good03', '玫斯METZ 大型犬肠道护理粮 9.07kg(20lb) ', '425', '212', '9.07kg', '易消化 助发育 增营养 强骨骼 缓解肠道不适', 'atv01');
INSERT INTO `activitygoods` VALUES ('good04', '玫斯METZ 无谷物小型犬奶糕粮 6.8kg(15lb) ', '396', '198', '6.8kg', '小型犬奶糕专用 增营养 促发育', 'atv01');
INSERT INTO `activitygoods` VALUES ('good05', '玫斯METZ 无谷物大型犬奶糕粮 9.07kg(20lb)', '477', '238', '9.07kg', '大型犬奶糕专用 增营养 促发育 强骨骼', 'atv01');
INSERT INTO `activitygoods` VALUES ('good06', '玫斯METZ 挑嘴美毛配方全犬粮 1.36kg(3lb)', '96', '78', '1.36kg', '满足挑剔需求 增营养 强骨骼 健肤美毛', 'atv01');
INSERT INTO `activitygoods` VALUES ('good07', '醇粹Purich 金标中大型犬成犬粮 15kg', '478', '358', '15kg', '低温烘焙营养丰富 适合12月龄以上的中大型犬', 'atv02');
INSERT INTO `activitygoods` VALUES ('good08', '醇粹Purich 金标中大型犬幼犬粮 15kg', '498', '373', '15kg', '低温烘焙营养丰富 适合12月龄以下的中大型犬', 'atv02');
INSERT INTO `activitygoods` VALUES ('good09', ' 醇粹Purich 低温烘焙小型犬奶糕 / 幼犬粮 2kg ', '95', '80', '2kg', '12月龄以下小型犬 肉含量超过70% ', 'atv02');
INSERT INTO `activitygoods` VALUES ('good10', '醇粹Purich 低温烘焙系列 皮肤呵护成犬粮 2kg ', '92', '69', '2kg', '低温烘烤 风味独特 锁住营养 全面健康', 'atv02');
INSERT INTO `activitygoods` VALUES ('good11', '醇粹Purich 12个月以下 小型犬奶糕及幼犬粮 3KG', '109', '87', '3kg', '针对中国养宠环境 膳食合理 高营养助长', 'atv02');
INSERT INTO `activitygoods` VALUES ('good12', '醇粹Purich 12个月以下 小型犬奶糕及幼犬粮 10KG', '308', '216', '10kg', '针对中国养宠环境研制 膳食合理 高营养助长', 'atv02');
INSERT INTO `activitygoods` VALUES ('good13', '日本派地奥 犬用金太郎变身装 S号胸围27-35cm*脖围27cm', '58', '98', 'S', '萌宠大变身 Q萌可爱 高颜有趣 柔软舒适 胸围27-35cm*脖围27cm', 'atv03');
INSERT INTO `activitygoods` VALUES ('good14', '2017年新款 优派 卡通小鸡棉衣 蓝色M号', '29', '39', 'M', '加绒卫衣 长毛绒 小鸡造型 带帽', 'atv03');
INSERT INTO `activitygoods` VALUES ('good15', '2017年新款 嘟贝贝 加厚绵羊变身装 16号', '65', '37', '16号', 'Q萌变身装 可爱时尚 韩版设计 双面舒棉绒 柔软舒适', 'atv03');
INSERT INTO `activitygoods` VALUES ('good16', '2017年新款 绒域坊 海盗款宠物变身装 XL号', '46', '31', 'XL', '颈围*胸围*前肢*总长54*62*18*50cm', 'atv03');
INSERT INTO `activitygoods` VALUES ('good17', '2017年新款 宠趣 超萌卡通插肩袖卫衣 宝蓝烟斗狮XS号', '14', '15', 'XS', '抓绒卫衣 时尚插肩袖 螺纹下摆 防风保暖', 'atv03');
INSERT INTO `activitygoods` VALUES ('good18', '2017年新款 PETCIRCLE宠物圈 小飞侠狗狗变身装 蓝色XXS号', '36', '24', 'XXS', '小飞侠变身装 可爱Q萌 时尚有范 厚实温暖 亲肤舒适', 'atv03');
INSERT INTO `activitygoods` VALUES ('good19', '2017年新款 宠趣 超萌卡通插肩袖卫衣 酒红长角鹿XS号', '14', '15', 'XS', '抓绒卫衣 时尚插肩袖 螺纹下摆 防风保暖', 'atv03');
INSERT INTO `activitygoods` VALUES ('good20', '2017年新款 嘟贝贝可爱无脸男四脚绒衣 12号', '22', '24', '12号', '软萌可爱 细腻柔软 温和亲肤 保暖抗寒', 'atv03');
INSERT INTO `activitygoods` VALUES ('good21', '2017年新款 PETCIRCLE宠物圈 棉花糖小熊棉衣 蓝色M号', '42', '29', 'M', '颜色绚丽 俏皮活力 可爱小熊连帽 羽绒材质 温暖舒适 轻盈无束缚', 'atv04');
INSERT INTO `activitygoods` VALUES ('good22', '2017年新款 优派 小胡子两腿棉衣 灰色S号', '43', '27', 'S号', ' 3层厚棉衣 贴身剪裁 厚实帽子', 'atv04');
INSERT INTO `activitygoods` VALUES ('good23', '2017年新款 妮克威尔 米白色长颈鹿四脚连体衣 S号 ', '118', '64', 'S号', ' 软萌长颈鹿贴布 时尚清新 个性撞色设计 玩转潮流', 'atv04');
INSERT INTO `activitygoods` VALUES ('good24', '优派 小型犬三叶草两脚卫衣 玫红 XS', '19', '10', 'XS', '2016年秋冬新款 抓绒保暖卫衣 柔软舒适', 'atv04');
INSERT INTO `activitygoods` VALUES ('good25', '2017年新款 优派 斗牛犬卫衣 红条纹M号', '30', '16', 'M号', '抓绒卫衣 剪裁合身 插肩袖 小圆领', 'atv04');
INSERT INTO `activitygoods` VALUES ('good26', '2017年新款 趣派CHEEPET 多变领子卫衣 咖啡色 M号', '48', '36', 'M号', '高中低领随意调节 紧身设计更保暖', 'atv04');
INSERT INTO `activitygoods` VALUES ('good27', '2017年新款 趣派CHEEPET 韩系假领披肩两脚衣 粉色 M号', '42', '26', 'M号', '时尚假领子打底单穿都有型', 'atv04');
INSERT INTO `activitygoods` VALUES ('good28', '2017年新款 迈蔻MKO 粗花呢高雅香风裙 粉色 XS号', '45', '28', 'XS号', '淑女小香风 温暖高雅', 'atv05');
INSERT INTO `activitygoods` VALUES ('good29', '2017年新款 嘟贝贝 蓝白条纹翻领蕾丝蛋糕裙 12号', '68', '41', '12号', '甜美时尚 温暖秋冬 柔软舒适', 'atv05');
INSERT INTO `activitygoods` VALUES ('good30', '2017年新款 优派 厚款三色毛线两腿棉衣 灰色L号', '38', '24', 'L号', '带帽毛衣 内层摇粒绒 修身剪裁', 'atv05');
INSERT INTO `activitygoods` VALUES ('good31', '2017年新款 优派 女生小棉裙 蓝色S号', '28', '16', 'S号', '蕾丝花边 小圆立领 单层厚棉 亲肤保暖', 'atv05');
INSERT INTO `activitygoods` VALUES ('good32', '2017年新款 嘟贝贝 蓝色甜美卫衣背带裙 12号', '52', '26', '12号', '时尚甜美 厚实保暖 立体有型 亲肤舒适', 'atv05');
INSERT INTO `activitygoods` VALUES ('good33', '吉米娃娃 棉球网纱裙 米色8号', '54', '28', '8号', '立体剪裁 复古纱裙 可拆取棉球', 'atv05');
INSERT INTO `activitygoods` VALUES ('good34', '菩施康 犬用成长钙 150片', '32', '27', '150片', '欧美配方 促进骨骼成长', 'atv06');
INSERT INTO `activitygoods` VALUES ('good35', '菩施康 犬用酵素卵磷脂美毛素 10g*6袋', '36', '31', '10g*6袋', '修复受损皮毛 增强毛发色素 亮泽浓密被毛', 'atv06');
INSERT INTO `activitygoods` VALUES ('good36', '菩施康 初乳微量元素片 150片', '39', '33', '150片', '治疗异食症 增强食欲 促进发育', 'atv06');
INSERT INTO `activitygoods` VALUES ('good37', '菩施康 犬用纯羊奶粉 8g*10袋/盒', '39', '33', '8g*10袋/盒', '营养均衡 离乳期替代品', 'atv06');
INSERT INTO `activitygoods` VALUES ('good38', '菩施康 犬用B族维生素 150片 ', '54', '46', '150片', '欧美配方 改善口臭 健康皮毛', 'atv06');
INSERT INTO `activitygoods` VALUES ('good39', '菩施康 犬用卵磷脂软胶囊 50粒', '50', '42', '50粒', '欧美配方 改善皮肤 亮丽毛发', 'atv06');
INSERT INTO `activitygoods` VALUES ('good40', '美国AKC 大骨牛奶钙丸 60粒 适合小型犬', '32', '25', '60粒', '补钙', 'atv07');
INSERT INTO `activitygoods` VALUES ('good41', '美国AKC 犬用天然除耳螨油 20ml', '37', '28', '20ml', '医仕高总代 专业医疗保健品牌', 'atv07');
INSERT INTO `activitygoods` VALUES ('good42', '美国AKC 犬用必威皮肤膏 39.62g', '35', '28', '39.62g', '医仕高总代 专业医疗保健品牌', 'atv07');
INSERT INTO `activitygoods` VALUES ('good43', '美国AKC 犬用洗耳水 125ml ', '39', '32', '125ml', '医仕高总代 防治耳炎 除耳臭 清洁耳垢 ', 'atv07');
INSERT INTO `activitygoods` VALUES ('good44', 'K9 健齿香系列 犬用奶酪+海藻双色洁牙棒 230g', '20', '12', '230g', '星形设计 健齿又营养 鲜美口感', 'atv08');
INSERT INTO `activitygoods` VALUES ('good45', 'K9 健齿香系列 犬用 益生菌+茶多酚双色洁牙棒 230g', '20', '12', '230g', '星形设计 健齿又营养 鲜美口感', 'atv08');
INSERT INTO `activitygoods` VALUES ('good46', 'K9 骨骨怪多效牛钳骨', '20', '15', null, '添加羊乳酵母 补钙健齿 强健关节 调理肠胃 真骨不含胶', 'atv08');
INSERT INTO `activitygoods` VALUES ('good47', 'K9 低温碳烤系列 雪花牛肉粒狗零食 400g', '38', '32', '400g', '碳烤美味 韧爽可口 营养加倍', 'atv08');
INSERT INTO `activitygoods` VALUES ('good48', 'K9 营养犬罐头 100g （三种口味随机） ', '7', '5', '100g', '火鸡肉豌豆 牛肉紫薯 羊肉香米 三种口味随机 海鲜美味 营养加倍', 'atv08');
INSERT INTO `activitygoods` VALUES ('good49', 'K9 草原优品 火鸡肉+紫薯狗零食220g', '20', '16', '220g', '香醇可口 营养蛋白 提高免疫力', 'atv08');
INSERT INTO `activitygoods` VALUES ('good50', '2017新款爱旺 叛逆猫宠物毯子 S号61*41cm', '58', '55', '61*41cm', '时尚印花 防滑滴塑布 可铺沙发/床上 减少抓痕破坏', 'atv09');
INSERT INTO `activitygoods` VALUES ('good51', '捣蛋鬼 粉色提拉式航空箱 长61cm*宽39cm*高45cm', '168', '160', null, '外出方便 可以拉着走的航空箱', 'atv09');
INSERT INTO `activitygoods` VALUES ('good52', '意潇 精致圆蛋形塑料碗 碗口直径14cm*碗深5cm 红色', '5', '5', '14cm', '舒适享受 美观牢固 ', 'atv09');
INSERT INTO `activitygoods` VALUES ('good53', '意大利原装进口United Pets 狗狗外出航空箱 粉色51*33*37cm', '408', '388', '51*33*37cm', '童趣十足 旋转开门更方便 结实耐用', 'atv09');
INSERT INTO `activitygoods` VALUES ('good54', 'karlie 木纹犬用不锈钢食碗 深棕色 700ml', '125', '119', '700ml', '德国进口 高品质宠物用碗 不锈钢+木质底座', 'atv09');
INSERT INTO `activitygoods` VALUES ('good55', '日本Petstyle 犬用卡通宠物碳化青竹宠物凉席 50*37.5cm 小号', '18', '17', '50*37.5cm ', '碳化除臭 天然环保 竹编凉席 抗菌防蛀 镇静安神', 'atv09');

-- ----------------------------
-- Table structure for address
-- ----------------------------
DROP TABLE IF EXISTS `address`;
CREATE TABLE `address` (
  `receiveId` int(255) NOT NULL AUTO_INCREMENT COMMENT '收货地址id',
  `userId` int(255) DEFAULT NULL COMMENT '用户id',
  `orderId` int(10) DEFAULT NULL,
  `linkMan` varchar(255) DEFAULT NULL COMMENT '联系人',
  `phone` varchar(255) DEFAULT NULL COMMENT '联系电话',
  `village` varchar(255) DEFAULT NULL COMMENT '所在地区',
  `doorplate` varchar(255) DEFAULT NULL COMMENT '门牌号',
  `type` varchar(255) DEFAULT NULL COMMENT '地址类型（默认）',
  PRIMARY KEY (`receiveId`)
) ENGINE=MyISAM AUTO_INCREMENT=143 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of address
-- ----------------------------
INSERT INTO `address` VALUES ('131', '43', null, '123', '18620154961', '340000,341500,341522', '123412124', '1');
INSERT INTO `address` VALUES ('119', '42', '3', 'sherah', '13589333334', '广西壮族自治区,北海市,合浦县', '天远路', 'true');
INSERT INTO `address` VALUES ('130', '43', null, '1231', '13212312312', '340000,341500,341522', '123123123', '1');
INSERT INTO `address` VALUES ('128', '43', null, 'hhe', '1234', '330000,330400,330481', '22', '1');
INSERT INTO `address` VALUES ('129', '42', null, '123', '13123123123', '110000,110100,110114', '123123124', '1');
INSERT INTO `address` VALUES ('126', '2', null, '么么哒', '13553545353', '330000,330700,330783', '好远路', 'true');
INSERT INTO `address` VALUES ('132', '43', null, '2222', '13212312312', '340000,341500,341522', '6666', '1');
INSERT INTO `address` VALUES ('133', '43', null, '666', '13213231231', '340000,341500,341522', '12312312', '1');
INSERT INTO `address` VALUES ('134', '0', null, 'true', 'true', 'true', 'true', 'true');
INSERT INTO `address` VALUES ('135', '43', null, '9999', '13212312312', '340000,341500,341522', '123123', '1');
INSERT INTO `address` VALUES ('138', '43', null, '999', '13412312312', '340000,341500,341522', '33333', 'true');
INSERT INTO `address` VALUES ('139', '47', null, 'sbm', '13343543543', '340000,341500,341522', '12', 'true');
INSERT INTO `address` VALUES ('140', '49', null, '666', '213213213', '340000,340500,340506', 'dsadasdas', 'true');
INSERT INTO `address` VALUES ('141', '48', null, '123456', '18620154961', '340000,341500,341522', '23423523', 'true');
INSERT INTO `address` VALUES ('142', '50', null, 'jj', '342536', '450000,451000,451024', 'mhjvfhj', 'true');

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `userId` int(255) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `user` varchar(255) DEFAULT NULL COMMENT '用户名',
  `email` varchar(255) DEFAULT NULL COMMENT '电子邮箱',
  `password` varchar(255) DEFAULT NULL COMMENT '密码',
  `creat_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '用户添加时间',
  PRIMARY KEY (`userId`)
) ENGINE=MyISAM AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin
-- ----------------------------

-- ----------------------------
-- Table structure for ancol
-- ----------------------------
DROP TABLE IF EXISTS `ancol`;
CREATE TABLE `ancol` (
  `ancolid` int(50) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '0',
  `curprice` varchar(255) NOT NULL DEFAULT '0',
  `oriprice` varchar(255) NOT NULL DEFAULT '0',
  `imgurl` varchar(255) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ancolid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ancol
-- ----------------------------
INSERT INTO `ancol` VALUES ('1', 'ANCOL安蔻儿 幼犬无泪配方 天然香波 200ml', '75.65', '89.00', '../src/assets/img/navList/26e2ee50683cca3a0d2afe4724ff682c.jpg');
INSERT INTO `ancol` VALUES ('2', 'ANCOL安蔻儿 清爽去味香波 200ml', '75.65', '89.00', '../src/assets/img/navList/a2125172253db87119ac6802ab7c71d8.jpg');
INSERT INTO `ancol` VALUES ('3', 'ANCOL安蔻儿 经典系列 扭链双条牵引带 长16cm ', '44.00', '88.00', '../src/assets/img/navList/d81db019eaa5558af8ee798224d36989.jpg');
INSERT INTO `ancol` VALUES ('4', 'ANCOL安蔻儿 真皮时尚系列 真皮双色颈圈项圈 葡萄紫', '129.35', '199.00', '../src/assets/img/navList/d56765fa801eb5ccc438982809414fb5.jpg');
INSERT INTO `ancol` VALUES ('5', 'ANCOL安蔻儿 真皮时尚系列 真皮双色牵引带 葡萄紫 1-3码 宽1.9cm*长100cm ', '129.35', '129.35', '../src/assets/img/navList/592600790f36e3dec9eba1ba2c51a0a6.jpg');

-- ----------------------------
-- Table structure for brand
-- ----------------------------
DROP TABLE IF EXISTS `brand`;
CREATE TABLE `brand` (
  `brandId` int(11) NOT NULL AUTO_INCREMENT COMMENT '品牌id',
  `brandName` varchar(255) DEFAULT NULL COMMENT '品牌名称',
  `brandImg` varchar(255) DEFAULT NULL COMMENT '品牌图片',
  `category1Id` int(11) DEFAULT NULL COMMENT '分类2id',
  PRIMARY KEY (`brandId`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of brand
-- ----------------------------
INSERT INTO `brand` VALUES ('1', '天衡宝（原雪山）', '../../src/assets/img/brand/c72319096507029d8d145c6b18aabda.jpg', '2');
INSERT INTO `brand` VALUES ('2', 'ZIWI Peak', '../../src/assets/img/brand/64ac5fd97740cb0fab0cfe3eac1d27f7.jpg', '2');
INSERT INTO `brand` VALUES ('3', '比瑞吉', '../../src/assets/img/brand/c2adde2885a24e1152d744524a1d2c67.jpg', '2');
INSERT INTO `brand` VALUES ('4', '牛油果AVODerm', '../../src/assets/img/brand/b13de5404822dec7fec61a1fc4ba29c6.jpg', '2');
INSERT INTO `brand` VALUES ('5', '枫树大道Maples', '../../src/assets/img/brand/859ee74368cc7990c61d89e66a3af151.jpg', '2');
INSERT INTO `brand` VALUES ('6', '原始猎食渴望', '../../src/assets/img/brand/87feaa80f9fbed84c37a7b07da6324a1.jpg', '2');
INSERT INTO `brand` VALUES ('7', '伯纳天纯', '../../src/assets/img/brand/86414673b92fb227bbd0d006949814ab.jpg', '2');
INSERT INTO `brand` VALUES ('8', '冠能', '../../src/assets/img/brand/3b236d1731bd91004bffcec3515e1a0a.jpg', '2');
INSERT INTO `brand` VALUES ('9', 'Opawz', '../../src/assets/img/brand/c0dab99c5239d783320175df8998554a.jpg', '4');
INSERT INTO `brand` VALUES ('10', '拉夫威尔', '../../src/assets/img/brand/42ab9ac9118609ec64e43e95f922bd29.jpg', '4');
INSERT INTO `brand` VALUES ('11', '彼痞客ppark', '../../src/assets/img/brand/ef99f84749812353fb8b402a25120f6a.jpg', '4');
INSERT INTO `brand` VALUES ('12', '韵新Wincwent', '../../src/assets/img/brand/ec41f0dc6478fd51ffe733c6cba49592.jpg', '4');
INSERT INTO `brand` VALUES ('13', '贝欧', '../../src/assets/img/brand/3f7158a46ddf789d5ab39495cbc7a585.jpg', '4');
INSERT INTO `brand` VALUES ('14', 'TouchDog', '../../src/assets/img/brand/aba86b0caa1438bffcfc810b1bab9ee7.jpg', '4');
INSERT INTO `brand` VALUES ('15', '麦德氏', '../../src/assets/img/brand/31b7dfdd08ce602f1239ae8ce7954802.jpg', '8');
INSERT INTO `brand` VALUES ('16', 'MAG', '../../src/assets/img/brand/d9e05c4a2d35c88ffee0dcec98fba6a4.jpg', '8');
INSERT INTO `brand` VALUES ('17', '谷登GOLDEN', '../../src/assets/img/brand/276527f25e9151ef48b0b8d2dba79d29.jpg', '8');
INSERT INTO `brand` VALUES ('18', 'K9 Super Health', '../../src/assets/img/brand/3259b85b08dcc0054e6c24b585905d28.jpg', '8');
INSERT INTO `brand` VALUES ('19', 'KONG', '../../src/assets/img/brand/6ee8a646d754969b0b16494834b72791.jpg', '7');
INSERT INTO `brand` VALUES ('20', 'petsafe', '../../src/assets/img/brand/001bc93001b123d3abf7c37e435ba19b.jpg', '7');
INSERT INTO `brand` VALUES ('21', '梵米派Famipet', '../../src/assets/img/brand/f02f4ec6603b8ac8ee8e79e4a4fd6c8b.jpg', '7');
INSERT INTO `brand` VALUES ('22', '莱诺', '../../src/assets/img/brand/26d9e239dd3b06bb53ac30023d1eb614.jpg', '7');
INSERT INTO `brand` VALUES ('23', 'SodaPup', '../../src/assets/img/brand/8753b081d5a23e95fdd81cbfff790f34.jpg', '7');
INSERT INTO `brand` VALUES ('24', '红脚丫', '../../src/assets/img/brand/8b8aef29422b8a74ebe095517451ed51.jpg', '7');
INSERT INTO `brand` VALUES ('25', '星记StarMark', '../../src/assets/img/brand/72ab214047dac261b276d1f1588ffe98.jpg', '7');
INSERT INTO `brand` VALUES ('26', '千羽', '../../src/assets/img/brand/7391d24d851c6fe5a34de10e777a504f.jpg', '11');
INSERT INTO `brand` VALUES ('27', '宠博士', '../../src/assets/img/brand/6d3fcbd8dbe2b4eaa9a574d82bd63054.jpg', '11');
INSERT INTO `brand` VALUES ('28', '百威皇冠', '../../src/assets/img/brand/53aa346a561f1d2b938b0f9a8237851b.jpg', '11');
INSERT INTO `brand` VALUES ('29', '春舟', '../../src/assets/img/brand/a938be16ed441a0103f901df3217be1a.jpg', '11');
INSERT INTO `brand` VALUES ('30', '科德士', '../../src/assets/img/brand/d2d544344f481f164c4e74b107a9143b.jpg', '11');
INSERT INTO `brand` VALUES ('31', '欧维华', '../../src/assets/img/brand/22c60ba0f1f83c6613627c1aaa22c806.jpg', '11');
INSERT INTO `brand` VALUES ('32', '华尔Wahl', '../../src/assets/img/brand/5774d616c74b3eda50a9bc8d79220a6c.jpg', '11');
INSERT INTO `brand` VALUES ('33', '贵族Natures Gift', '../../src/assets/img/brand/ef4a3c316d6f2bb6a4258c4bbe962da3.jpg', null);
INSERT INTO `brand` VALUES ('34', '佩玛思特', '../../src/assets/img/brand/ae65b2472e5b8ef1225fc970311b145c.jpg', null);
INSERT INTO `brand` VALUES ('35', '畅享Cheer Share', '../../src/assets/img/brand/5b4656e1714209355f6533ff9748cd63.jpg', null);
INSERT INTO `brand` VALUES ('36', '蓝氏LegendSandy', '../../src/assets/img/brand/d6b2233aeec1529b8847fe22075762e8.jpg', null);
INSERT INTO `brand` VALUES ('37', '诺瑞Nory', '../../src/assets/img/brand/4fb0467d74b9ce16b59e51f9caaa8dfc.jpg', null);
INSERT INTO `brand` VALUES ('38', '皇家royal canin', '../../src/assets/img/brand/439fb8e3c2ada7a0917e3a590029e379.jpg', null);
INSERT INTO `brand` VALUES ('39', '纽翠宝NUTRIPE', '../../src/assets/img/brand/dca58009b64dba66a1025358ced2df9a.jpg', '3');
INSERT INTO `brand` VALUES ('40', 'SmartBones', '../../src/assets/img/brand/ff40e64b2bd1a45631b3ac2fe06fe3a2.jpg', '3');
INSERT INTO `brand` VALUES ('41', 'K9Natural', '../../src/assets/img/brand/e7efaff14c0926ac7e797603bcacf5e6.jpg', '3');
INSERT INTO `brand` VALUES ('42', '路斯', '../../src/assets/img/brand/f72f0855fa02052f23c3d19b22f8242c.jpg', '3');
INSERT INTO `brand` VALUES ('43', '绿的Greenies', '../../src/assets/img/brand/0e2d0da1945c8097a7a7e09327eb8319.jpg', '3');
INSERT INTO `brand` VALUES ('44', '宝路Pedigree', '../../src/assets/img/brand/d79dbf085149f97b2d518d3ccdc91437.jpg', '3');
INSERT INTO `brand` VALUES ('45', '约翰农场', '../../src/assets/img/brand/0db2ba34e5d995d07590a16942411669.jpg', '3');
INSERT INTO `brand` VALUES ('46', '梵米派Famipet', '../../src/assets/img/brand/f02f4ec6603b8ac8ee8e79e4a4fd6c8b.jpg', '3');
INSERT INTO `brand` VALUES ('47', '犬心保', '../../src/assets/img/brand/fed6547b142c4a53584a0a886a65b707.jpg', '9');
INSERT INTO `brand` VALUES ('48', '福来恩', '../../src/assets/img/brand/7f05c5e0fb15da2f14748c19d23a7334.jpg', '9');
INSERT INTO `brand` VALUES ('49', '麦高臣MicrocynAH', '../../src/assets/img/brand/4c37fc2c6578742b2a7747c135c5aef4.jpg', '9');
INSERT INTO `brand` VALUES ('50', '多美洁', '../../src/assets/img/brand/0f7e2127c9d9defebe8d49ec98792cc4.jpg', '9');
INSERT INTO `brand` VALUES ('51', '红狗RedDog', '../../src/assets/img/brand/df67486fca926e53a4352e12250f87d1.jpg', '9');
INSERT INTO `brand` VALUES ('52', '维克', '../../src/assets/img/brand/7dac564a72c7ac184120c61c699bfa2a.jpg', '9');
INSERT INTO `brand` VALUES ('53', '小宠', '../../src/assets/img/brand/be4c1125ac976e9771117a59af6d874e.jpg', '9');
INSERT INTO `brand` VALUES ('54', 'AKC', '../../src/assets/img/brand/0c858d3e3373a1845bb94b685a1474f8.jpg', '9');
INSERT INTO `brand` VALUES ('55', '福莱希Flexi', '../../src/assets/img/brand/5ec59d56a043f70086ba870494013017.jpg', '10');
INSERT INTO `brand` VALUES ('56', 'Julius K9', '../../src/assets/img/brand/657a5590cb712ec28cfb380a72c8ad0e.jpg', '10');
INSERT INTO `brand` VALUES ('57', '拉夫威尔', '../../src/assets/img/brand/42ab9ac9118609ec64e43e95f922bd29.jpg', '10');
INSERT INTO `brand` VALUES ('58', '瑞鼎狗RedDingo', '../../src/assets/img/brand/53d658a30760c86268b70e960617e6d5.jpg', '10');
INSERT INTO `brand` VALUES ('59', '多尼斯DOGNESS', '../../src/assets/img/brand/8f328b276a78cb591164ab0a535ba46c.jpg', '10');
INSERT INTO `brand` VALUES ('60', '伊丽', '../../src/assets/img/brand/cb731c481448a68ec8ad2de587768344.jpg', '10');
INSERT INTO `brand` VALUES ('61', '意潇', '../../src/assets/img/brand/b9b738ebf2224f5dc700eea53857f00e.jpg', '10');
INSERT INTO `brand` VALUES ('62', 'Timberwolf', '../../src/assets/img/brand/69b266f8d8272fe3d4586bf8425e4c84.jpg', '10');

-- ----------------------------
-- Table structure for brandsale
-- ----------------------------
DROP TABLE IF EXISTS `brandsale`;
CREATE TABLE `brandsale` (
  `brandgoodsId` int(11) NOT NULL COMMENT '品牌商品id',
  `type` varchar(255) NOT NULL COMMENT '品牌类型',
  `brandName` varchar(255) NOT NULL COMMENT '品牌名称',
  `time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '倒计时时间戳',
  `imgUrl` varchar(255) NOT NULL COMMENT 'imgurl',
  PRIMARY KEY (`brandgoodsId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='品牌特卖';

-- ----------------------------
-- Records of brandsale
-- ----------------------------
INSERT INTO `brandsale` VALUES ('1', '主粮零食', '皇家VIP专场', '2018-02-07 19:49:33', '../src/assets/img/navList/68e9ce31627e7ed27ec08c1c71754ce3.jpg');
INSERT INTO `brandsale` VALUES ('2', '主粮零食', '高性价比犬粮', '2018-02-08 20:00:06', '../src/assets/img/navList/brandsale1.jpg');
INSERT INTO `brandsale` VALUES ('3', '主粮零食', '一生一世为爱犬', '2018-02-09 19:51:38', '../src/assets/img/navList/3dac4de5056c0acb9984679d964795f6.jpg');
INSERT INTO `brandsale` VALUES ('4', '主粮零食', '比瑞吉', '2018-02-06 22:53:06', '../src/assets/img/navList/6e2b99221b791dd38bf363602438ea20.jpg');
INSERT INTO `brandsale` VALUES ('5', '主粮零食', 'K9 一切源自天然', '2018-02-05 09:54:42', '../src/assets/img/navList/5cf9bfe52233a16fcc4cdfac482d4169.jpg');
INSERT INTO `brandsale` VALUES ('6', '主粮零食', '来自新西兰的美食馈赠', '2018-02-09 20:01:45', '../src/assets/img/navList/5d51d97caa6187386e3eb326b92b6057.jpg');
INSERT INTO `brandsale` VALUES ('7', '主粮零食', '顽皮Wanpy', '2018-02-09 20:04:19', '../src/assets/img/navList/1ac17621ce2317f7334a3f700b7f0cb0.jpg');
INSERT INTO `brandsale` VALUES ('8', '主粮零食', '玫斯METZ精选狗粮', '2018-02-07 20:05:48', '../src/assets/img/navList/048f4f14153504cb236621079e5c418f.png');
INSERT INTO `brandsale` VALUES ('9', '主粮零食', '麦富迪', '2018-02-09 20:07:05', '../src/assets/img/navList/cdefdf11be4e094379073cbc5aaf3cc7.jpg');
INSERT INTO `brandsale` VALUES ('10', '医疗保健', '卫仕保健品', '2018-02-07 20:08:16', '../src/assets/img/navList/fcd8ee34ece27e5cd538c2a671a9ab44.jpg');
INSERT INTO `brandsale` VALUES ('11', '医疗保健', '菩施康', '2018-02-06 20:09:19', '../src/assets/img/navList/96c332d6b79b05af4a236e8175261b50.jpg');
INSERT INTO `brandsale` VALUES ('12', '医疗保健', 'AKC', '2018-02-07 20:10:51', '../src/assets/img/navList/00eaaae814c38fc582ac73850269898c.png');
INSERT INTO `brandsale` VALUES ('13', '玩具用品', '圣路薇香波专场', '2018-02-09 20:12:23', '../src/assets/img/navList/de80417a5d9d6a01dcdc499636081cfc.jpg');
INSERT INTO `brandsale` VALUES ('14', '玩具用品', '特瑞仕', '2018-02-07 20:14:09', '../src/assets/img/navList/16bf306799cdf1ad6b105d7abf7aef9f.jpg');
INSERT INTO `brandsale` VALUES ('15', '玩具用品', '光能净', '2018-02-06 20:15:33', '../src/assets/img/navList/4a09544b3955dc1d473ae9a539ff5990.jpg');

-- ----------------------------
-- Table structure for car
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `goodId` varchar(255) DEFAULT NULL COMMENT '商品id',
  `carId` int(225) NOT NULL AUTO_INCREMENT COMMENT '购物车Id',
  `userId` varchar(225) DEFAULT NULL COMMENT '用户id',
  `count` varchar(12) DEFAULT '1' COMMENT '商品数量',
  `checkedstatus` varchar(255) DEFAULT 'false' COMMENT '购物车选中状态：''true''：选中；''false''：不选中',
  PRIMARY KEY (`carId`)
) ENGINE=MyISAM AUTO_INCREMENT=308 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of car
-- ----------------------------
INSERT INTO `car` VALUES ('1', '255', '24', '2', 'true');
INSERT INTO `car` VALUES ('2', '1', '33', '2', 'false');
INSERT INTO `car` VALUES ('8', '2', '33', '1', 'false');
INSERT INTO `car` VALUES ('7', '3', '33', '1', 'false');
INSERT INTO `car` VALUES ('14', '297', '43', '3', 'true');
INSERT INTO `car` VALUES ('2', '292', '2', '3', 'true');
INSERT INTO `car` VALUES ('1', '291', '2', '2', 'true');
INSERT INTO `car` VALUES ('14', '288', '42', '4', 'true');
INSERT INTO `car` VALUES ('9', '287', '42', '12', 'true');

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `categoryId` int(11) NOT NULL AUTO_INCREMENT COMMENT '大的分类',
  `categoryName` varchar(255) DEFAULT NULL COMMENT '分类名',
  `categoryImg` varchar(255) DEFAULT NULL COMMENT '大分类图片',
  `categoryImg2` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`categoryId`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', '狗狗主粮', '', '');
INSERT INTO `category` VALUES ('2', '服饰城', '', '');
INSERT INTO `category` VALUES ('3', '医疗保健', '', '');
INSERT INTO `category` VALUES ('4', '零食玩具', '', '');
INSERT INTO `category` VALUES ('5', '日用外出', '', '');
INSERT INTO `category` VALUES ('6', '美容香波', null, null);

-- ----------------------------
-- Table structure for category1
-- ----------------------------
DROP TABLE IF EXISTS `category1`;
CREATE TABLE `category1` (
  `category1Id` int(10) NOT NULL AUTO_INCREMENT,
  `categoryName` varchar(255) NOT NULL,
  PRIMARY KEY (`category1Id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of category1
-- ----------------------------
INSERT INTO `category1` VALUES ('1', '为您推荐');
INSERT INTO `category1` VALUES ('2', '狗狗主粮');
INSERT INTO `category1` VALUES ('3', '狗狗零食');
INSERT INTO `category1` VALUES ('4', '狗狗服饰');
INSERT INTO `category1` VALUES ('5', '狗狗窝垫');
INSERT INTO `category1` VALUES ('6', '狗狗生活');
INSERT INTO `category1` VALUES ('7', '狗狗玩具');
INSERT INTO `category1` VALUES ('8', '狗狗保健');
INSERT INTO `category1` VALUES ('9', '狗狗医疗');
INSERT INTO `category1` VALUES ('10', '狗狗牵引');
INSERT INTO `category1` VALUES ('11', '狗狗美容');
INSERT INTO `category1` VALUES ('12', '狗狗周边');
INSERT INTO `category1` VALUES ('13', '临时新品');
INSERT INTO `category1` VALUES ('14', '狗狗清洁');

-- ----------------------------
-- Table structure for classify2
-- ----------------------------
DROP TABLE IF EXISTS `classify2`;
CREATE TABLE `classify2` (
  `category1Id` int(255) DEFAULT NULL COMMENT '分类1id',
  `classify2Id` int(255) NOT NULL AUTO_INCREMENT COMMENT '分类2id',
  `classifyName` varchar(255) DEFAULT NULL COMMENT '2分类名称',
  `classifyImg` varchar(255) DEFAULT '' COMMENT '2分类图',
  `recommend` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`classify2Id`)
) ENGINE=MyISAM AUTO_INCREMENT=716 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of classify2
-- ----------------------------
INSERT INTO `classify2` VALUES ('2', '1', '进口狗粮', '../../src/assets/img/food/0f972761c08a37c8baff88fa9302053d.jpg', '1');
INSERT INTO `classify2` VALUES ('2', '2', '国产狗粮', '../../src/assets/img/food/f38b8a4245c34c33061d04ad1e8009dd.jpg', '1');
INSERT INTO `classify2` VALUES ('2', '3', '散装狗粮', '../../src/assets/img/food/d35af0c7d00d62dc18165cdce3a9b8e1.jpg', null);
INSERT INTO `classify2` VALUES ('2', '4', '处方狗粮', '../../src/assets/img/food/3512594b71a2efd14b5c5925848d2e5a.jpg', null);
INSERT INTO `classify2` VALUES ('2', '5', '冻干狗粮', '../../src/assets/img/food/4e3455a75bc8d75be71816e51b917103.jpg', null);
INSERT INTO `classify2` VALUES ('4', '6', '时尚服饰', '../../src/assets/img/food/7feeef10bab3d2e8df8a9149e0cb7c70.jpg', null);
INSERT INTO `classify2` VALUES ('4', '7', '精美配饰', '../../src/assets/img/food/1d55d100e176bd571e4b0fd85604a14d.jpg', null);
INSERT INTO `classify2` VALUES ('4', '8', '断码反季', '../../src/assets/img/food/d55b1ff4802aa8b6eb402c6292022084.jpg', null);
INSERT INTO `classify2` VALUES ('8', '9', '强化免疫', '../../src/assets/img/food/fd206e6489657294e9067d349ea297f1.jpg', '1');
INSERT INTO `classify2` VALUES ('8', '10', '美毛增毛', '../../src/assets/img/food/93aae74674be8681c16ad26cd8de350a.jpg', null);
INSERT INTO `classify2` VALUES ('8', '11', '肠胃调理', '../../src/assets/img/food/8095e54e9414a06705acb7471eac7629.jpg', '1');
INSERT INTO `classify2` VALUES ('8', '12', '补钙强骨', '../../src/assets/img/food/19c089474d2c89f98435b088fb30b404.jpg', null);
INSERT INTO `classify2` VALUES ('8', '13', '微量元素', '../../src/assets/img/food/55aff065670558cb4ff66423f9ebc09e.jpg', null);
INSERT INTO `classify2` VALUES ('8', '14', '关节呵护', '../../src/assets/img/food/cc2ec24f1b68fe6f648aada3bc707959.jpg', null);
INSERT INTO `classify2` VALUES ('7', '15', '棉质玩具', '../../src/assets/img/food/fcab37ead00d77bcdddf7dabe6c817d7.jpg', null);
INSERT INTO `classify2` VALUES ('7', '16', '橡胶玩具', '../../src/assets/img/food/874299e54a8cf1488d6b1bead8f8e9bb.jpg', null);
INSERT INTO `classify2` VALUES ('7', '17', '塑料玩具', '../../src/assets/img/food/df1ed7120376370a4b5badaae61a0a7e.jpg', null);
INSERT INTO `classify2` VALUES ('7', '18', '食用玩具', '../../src/assets/img/food/a5c7619872749790f6d6fd1ff3eccedc.jpg', null);
INSERT INTO `classify2` VALUES ('7', '19', '木质玩具', '../../src/assets/img/food/e9145de044fd5cec4c9b8ed47360d98f.jpg', null);
INSERT INTO `classify2` VALUES ('7', '20', '乳胶玩具', '../../src/assets/img/food/00d7fbacb6042ccbf4348711788bf496.jpg', null);
INSERT INTO `classify2` VALUES ('6', '21', '狗狗餐具', '../../src/assets/img/food/b686acdc3b8a6e0e635fac80f1311214.jpg', null);
INSERT INTO `classify2` VALUES ('6', '22', '狗狗外出', '../../src/assets/img/food/643e72faf7dd1659ed632b2f40e59e75.jpg', null);
INSERT INTO `classify2` VALUES ('6', '23', '狗狗住所', '../../src/assets/img/food/1078c799ae6f02bf4255fd0919b813e9.jpg', null);
INSERT INTO `classify2` VALUES ('6', '24', '狗狗训练', '../../src/assets/img/food/590d323712426cc4383209983d4599eb.jpg', null);
INSERT INTO `classify2` VALUES ('11', '25', '专用香波', '../../src/assets/img/food/ec484631ffe713596eebce2797a8b21f.jpg', null);
INSERT INTO `classify2` VALUES ('11', '26', '日常洗护', '../../src/assets/img/food/d73ab91ef84809461227c6d0075f1caa.jpg', null);
INSERT INTO `classify2` VALUES ('11', '27', '免洗干洗', '../../src/assets/img/food/e5197ce68f598bfaa20cda64460fb26b.jpg', null);
INSERT INTO `classify2` VALUES ('11', '28', '洗澡工具', '../../src/assets/img/food/365564368d9b40cca9833adafb6ed63f.jpg', null);
INSERT INTO `classify2` VALUES ('11', '29', '梳剪工具', '../../src/assets/img/food/9e337e765abe013fd2b4742076dfbac8.jpg', null);
INSERT INTO `classify2` VALUES ('11', '30', '护理工具', '../../src/assets/img/food/1e78dcc3b144aa0e5fdfc9fcea1b1be3.jpg', null);
INSERT INTO `classify2` VALUES ('11', '31', '美容配套', '../../src/assets/img/food/e1b0d47ed59204385e33be0bf078513e.jpg', null);
INSERT INTO `classify2` VALUES ('1', '32', '强化免疫', '../../src/assets/img/food/fd206e6489657294e9067d349ea297f1.jpg', null);
INSERT INTO `classify2` VALUES ('1', '33', '进口狗粮', '../../src/assets/img/food/0f972761c08a37c8baff88fa9302053d.jpg', null);
INSERT INTO `classify2` VALUES ('1', '34', '肠胃调理', '../../src/assets/img/food/8095e54e9414a06705acb7471eac7629.jpg', null);
INSERT INTO `classify2` VALUES ('1', '35', '磨牙洁齿', '../../src/assets/img/food/2eeb97d6268f555de24ec370fd0de2ad.jpg', null);
INSERT INTO `classify2` VALUES ('1', '36', '体内驱虫', '../../src/assets/img/food/81f4ac6b5b31143c056046bd9dc14b9e.jpg', null);
INSERT INTO `classify2` VALUES ('1', '37', '国产狗粮', '../../src/assets/img/food/f38b8a4245c34c33061d04ad1e8009dd.jpg', null);
INSERT INTO `classify2` VALUES ('3', '38', '磨牙洁齿', '../../src/assets/img/food/2eeb97d6268f555de24ec370fd0de2ad.jpg', '1');
INSERT INTO `classify2` VALUES ('3', '39', '肉制零食', '../../src/assets/img/food/d50177937573448726b3fb99b5d48274.jpg', null);
INSERT INTO `classify2` VALUES ('3', '40', '点心饮料', '../../src/assets/img/food/f6c39185cb72a306122dd403c94c3a10.jpg', null);
INSERT INTO `classify2` VALUES ('3', '41', '罐头湿粮', '../../src/assets/img/food/9a7eb995107ffdfd1a6b5fa8928cfc02.jpg', null);
INSERT INTO `classify2` VALUES ('3', '42', '磨牙饼干', '../../src/assets/img/food/2e603a140e903ece0d8e9a86fcb97464.jpg', null);
INSERT INTO `classify2` VALUES ('3', '43', '冻干零食', '../../src/assets/img/food/4bf6a8f261337e34e38d4d8b43d149f1.jpg', null);
INSERT INTO `classify2` VALUES ('5', '44', '爆款推荐', '../../src/assets/img/food/945dac5c88fbfedba2ae6fdd68dee287.jpg', null);
INSERT INTO `classify2` VALUES ('5', '45', '小型犬专区', '../../src/assets/img/food/1a484a5f3e74f5028cefaff0cfad6725.jpg', null);
INSERT INTO `classify2` VALUES ('5', '46', '中型犬专区', '../../src/assets/img/food/246593b65783b1889f2a75e9819a6e35.jpg', null);
INSERT INTO `classify2` VALUES ('5', '47', '大型犬专区', '../../src/assets/img/food/c6fae62ac4e46e6c6d10c0845ae8df8e.jpg', null);
INSERT INTO `classify2` VALUES ('9', '48', '体外驱虫', '../../src/assets/img/food/c52111e9c4150f10ef7c5f9a1806fc93.jpg', null);
INSERT INTO `classify2` VALUES ('9', '49', '体内驱虫', '../../src/assets/img/food/81f4ac6b5b31143c056046bd9dc14b9e.jpg', '1');
INSERT INTO `classify2` VALUES ('9', '50', '皮肤病', '../../src/assets/img/food/a47022c467818d51964196a63d706b76.jpg', null);
INSERT INTO `classify2` VALUES ('9', '51', '家庭医疗常备', '../../src/assets/img/food/7d009bab6bcdaeb941f18bd510aa9d56.jpg', null);
INSERT INTO `classify2` VALUES ('9', '52', '耳部护理', '../../src/assets/img/food/ea59a2101f28f3a78b94e1e1671e35af.jpg', null);
INSERT INTO `classify2` VALUES ('9', '53', '眼部护理', '../../src/assets/img/food/4b27726f0f1a44b34cfe9a32965ceafb.jpg', null);
INSERT INTO `classify2` VALUES ('9', '54', '口鼻护理', '../../src/assets/img/food/137ab5ae324905b93aa37503b053ad19.jpg', null);
INSERT INTO `classify2` VALUES ('10', '55', '伸缩牵引', '../../src/assets/img/food/3cc32faf42f48f93b2534bef920623ee.jpg', null);
INSERT INTO `classify2` VALUES ('10', '56', '日常颈圈', '../../src/assets/img/food/934bbc53f04789a194bddf4007af984c.jpg', null);
INSERT INTO `classify2` VALUES ('10', '57', '日常拉带', '../../src/assets/img/food/7b322fbe812723d414b51e703052c7d8.jpg', null);
INSERT INTO `classify2` VALUES ('10', '58', '拉颈套装', '../../src/assets/img/food/363a030ee7a5c9a4c46870ba74ef5d96.jpg', null);
INSERT INTO `classify2` VALUES ('10', '59', '拉胸套装', '../../src/assets/img/food/ea817e6228e36533399ea6cbac068ee5.jpg', null);
INSERT INTO `classify2` VALUES ('10', '60', 'LED发光牵引', '../../src/assets/img/food/1fb05319b6b42be5f006705758b3b0e5.jpg', null);
INSERT INTO `classify2` VALUES ('10', '61', 'P链/蛇链', '../../src/assets/img/food/6e7c85be18f569be27d58d1c50f06b85.jpg', null);
INSERT INTO `classify2` VALUES ('12', '62', '生活用品', '../../src/assets/img/food/c6a56f40c0f3a28fadf814a7bb3d1a61.jpg', null);
INSERT INTO `classify2` VALUES ('12', '63', '18线小咖', '../../src/assets/img/food/9a6b79d4493be4f98e5a9dd905eb4489.png', null);
INSERT INTO `classify2` VALUES ('12', '64', 'E宠周边', '../../src/assets/img/food/a298840ed433d9ca577663834ccf5d58.jpg', null);
INSERT INTO `classify2` VALUES ('13', '65', '临时新品', '../../src/assets/img/food/a298840ed433d9ca577663834ccf5d58.jpg', null);
INSERT INTO `classify2` VALUES ('14', '66', '狗狗厕所', '../../src/assets/img/food/d5ade0444ad0945d671c0a2f914e30fd.jpg', null);
INSERT INTO `classify2` VALUES ('14', '67', '狗狗尿片', '../../src/assets/img/food/ba4a24c920d1c9c0a5ee43555f8b900b.jpg', null);
INSERT INTO `classify2` VALUES ('14', '68', '狗狗湿片', '../../src/assets/img/food/5a980a2b9737177177c01fc187f52109.jpg', null);
INSERT INTO `classify2` VALUES ('14', '69', '清洁除臭', '../../src/assets/img/food/601461874134987b3d4b6c345f398dd4.jpg', null);

-- ----------------------------
-- Table structure for classify3
-- ----------------------------
DROP TABLE IF EXISTS `classify3`;
CREATE TABLE `classify3` (
  `classify3Id` int(11) NOT NULL AUTO_INCREMENT COMMENT '分类3id',
  `classifyName` varchar(255) DEFAULT NULL COMMENT '分类3名称',
  `classifyImg` varchar(255) DEFAULT NULL COMMENT '分类3图片',
  `categoryId` int(11) DEFAULT NULL COMMENT '分类id',
  `tabId` varchar(255) DEFAULT NULL COMMENT '总称',
  PRIMARY KEY (`classify3Id`)
) ENGINE=InnoDB AUTO_INCREMENT=118 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of classify3
-- ----------------------------
INSERT INTO `classify3` VALUES ('1', '全犬', '../../src/assets/img/food/470a7338afe79f6775f32dbb38f26a9c.jpg', '1', 'tabId1');
INSERT INTO `classify3` VALUES ('2', '幼犬/哺乳期犬', '../../src/assets/img/food/3bdad8463d8b13fd83230d4777eb5eb8.jpg', '1', 'tabId1');
INSERT INTO `classify3` VALUES ('3', '成犬', '../../src/assets/img/food/56d2cd336393223f4624c35ae65165b2.jpg', '1', 'tabId1');
INSERT INTO `classify3` VALUES ('4', '老犬', '../../src/assets/img/food/0f0860a31161c14503f7f943acb944c7.jpg', '1', 'tabId1');
INSERT INTO `classify3` VALUES ('5', '小型犬', '../../src/assets/img/food/9ead012bdb55ad1144ad86dd7b522f85.jpg', '1', 'tabId1');
INSERT INTO `classify3` VALUES ('6', '中大型犬', '../../src/assets/img/food/ad617b8387e497562c455f5fa9ecd4b3.jpg', '1', 'tabId1');
INSERT INTO `classify3` VALUES ('7', '全犬', '../../src/assets/img/food/b21b49c58dea4eb0a9a057795d71620d.jpg', '1', 'tabId2');
INSERT INTO `classify3` VALUES ('8', '幼犬/哺乳期犬', '../../src/assets/img/food/7c9d752bdbe538ed870974848f25e17d.jpg', '1', 'tabId2');
INSERT INTO `classify3` VALUES ('9', '成犬', '../../src/assets/img/food/d9441034ad9b61ada9853a51388bb340.jpg', '1', 'tabId2');
INSERT INTO `classify3` VALUES ('10', '老犬', '../../src/assets/img/food/1137016f8c968e4855461fa4f280c728.jpg', '1', 'tabId2');
INSERT INTO `classify3` VALUES ('11', '小型犬', '../../src/assets/img/food/06ce76f3b037510aa52e31ac7fbeca19.jpg', '1', 'tabId2');
INSERT INTO `classify3` VALUES ('12', '中大型犬', '../../src/assets/img/food/ab2d57fe1334119316c39345c65af3d4.jpg', '1', 'tabId2');
INSERT INTO `classify3` VALUES ('13', '10元以内', '../../src/assets/img/food/3ffb6d9a013c82adfd2fd283213ed003.jpg', '1', 'tabId3');
INSERT INTO `classify3` VALUES ('14', '10-20元', '../../src/assets/img/food/f2d733365195efa1db68d410fdb37cec.jpg', '1', 'tabId3');
INSERT INTO `classify3` VALUES ('15', '20-30元', '../../src/assets/img/food/2fd411ba0fdfcb190c37566b2f0d23b0.jpg', '1', 'tabId3');
INSERT INTO `classify3` VALUES ('16', '30-40元', '../../src/assets/img/food/3fb09f83eccead0684956d82c73ef385.jpg', '1', 'tabId3');
INSERT INTO `classify3` VALUES ('17', '40-50元', '../../src/assets/img/food/a1c024b1ad2030756b25907fa5cd5513.jpg', '1', 'tabId3');
INSERT INTO `classify3` VALUES ('18', '50元以上', '../../src/assets/img/food/1636231472b2d290f52685936ef2c53c.jpg', '1', 'tabId3');
INSERT INTO `classify3` VALUES ('19', '鸡肉-易消化', '../../src/assets/img/food/ed38fad33fc6832ffe313498b03442f0.jpg', '1', 'tabId4');
INSERT INTO `classify3` VALUES ('20', '鱼肉-美毛健肤', '../../src/assets/img/food/3b22cce883a5abd4adafa377c72048fe.jpg', '1', 'tabId4');
INSERT INTO `classify3` VALUES ('21', '牛肉-低脂高蛋白', '../../src/assets/img/food/01e9a859acc8d1b83a95c026a8d3434f.jpg', '1', 'tabId4');
INSERT INTO `classify3` VALUES ('22', '羊肉-敏感型', '../../src/assets/img/food/1ae21059eb105ae40e831aaabb84b924.jpg', '1', 'tabId4');
INSERT INTO `classify3` VALUES ('23', '鸭肉-清火敏感', '../../src/assets/img/food/1e168ed6b8efa23da154822faa63d21d.jpg', '1', 'tabId4');
INSERT INTO `classify3` VALUES ('24', '外套', '../../src/assets/img/food/419cbc0384400cb4445568672c4f7b36.jpg', '2', null);
INSERT INTO `classify3` VALUES ('25', '卫衣', '../../src/assets/img/food/8797325e1b9e1ef225d1f1a672c3c91b.jpg', '2', null);
INSERT INTO `classify3` VALUES ('26', '四角装', '../../src/assets/img/food/19e855d658e0c5135043d4784b1a77be.jpg', '2', null);
INSERT INTO `classify3` VALUES ('27', '马甲', '../../src/assets/img/food/c8b6ab87e3edc7d79ad4c428424c1c81.jpg', '2', null);
INSERT INTO `classify3` VALUES ('28', '家具服', '../../src/assets/img/food/5e5aa0659b525d66d852af8ceec861b0.jpg', '2', null);
INSERT INTO `classify3` VALUES ('29', '毛衣', '../../src/assets/img/food/0c7fc2256c2a90fda3684dff237e561b.jpg', '2', null);
INSERT INTO `classify3` VALUES ('30', '精美配饰', '../../src/assets/img/food/5bdb0900f73a8f9be685f3b3f553c8cb.jpg', '2', null);
INSERT INTO `classify3` VALUES ('31', '耳部', '../../src/assets/img/food/695940d4759a6c3c28042feb4ba0a402.jpg', '3', 'tabId5');
INSERT INTO `classify3` VALUES ('32', '眼部', '../../src/assets/img/food/c2ce7348642f3701a375cc377374c45c.jpg', '3', 'tabId5');
INSERT INTO `classify3` VALUES ('33', '口部', '../../src/assets/img/food/b07170444f2e268feee5a452403ea33f.jpg', '3', 'tabId5');
INSERT INTO `classify3` VALUES ('34', '足部', '../../src/assets/img/food/412a4619e0754065d4671a30caa57425.jpg', '3', 'tabId5');
INSERT INTO `classify3` VALUES ('35', '医疗小用品', '../../src/assets/img/food/ff1afe47a9fc23721218b4f6a8a57677.jpg', '3', 'tabId5');
INSERT INTO `classify3` VALUES ('36', '异食癖', '../../src/assets/img/food/838e4aeeda2a61dc3e54e02f8f7018a8.jpg', '3', 'tabId6');
INSERT INTO `classify3` VALUES ('37', '肠胃不适', '../../src/assets/img/food/46d8cd73306558bb7928b367f5bfebd1.jpg', '3', 'tabId6');
INSERT INTO `classify3` VALUES ('38', '感冒咳嗽', '../../src/assets/img/food/ba5f84ec6ef16c343ddb790f322a6c27.jpg', '3', 'tabId6');
INSERT INTO `classify3` VALUES ('39', '骨骼关节', '../../src/assets/img/food/e30c43aa3b8aaa96769f856436003848.jpg', '3', 'tabId6');
INSERT INTO `classify3` VALUES ('40', '外伤护理', '../../src/assets/img/food/b49e3a5b1a2b01653d1fd54093246ec5.jpg', '3', 'tabId6');
INSERT INTO `classify3` VALUES ('41', '真菌', '../../src/assets/img/food/02f5c9728729a7230e0879b6097efcfc.jpg', '3', 'tabId7');
INSERT INTO `classify3` VALUES ('42', '螨虫', '../../src/assets/img/food/6003d1f38aa8853c49e4e0a49df29ee4.jpg', '3', 'tabId7');
INSERT INTO `classify3` VALUES ('43', '细菌', '../../src/assets/img/food/922ac89c97b250ed4d8c65c261e4318b.jpg', '3', 'tabId7');
INSERT INTO `classify3` VALUES ('44', '综合防治', '../../src/assets/img/food/06b28aa698cc6a430587eb2a01cd8061.jpg', '3', 'tabId7');
INSERT INTO `classify3` VALUES ('45', '皮肤修复', '../../src/assets/img/food/57bb35d96db2c4071404c88eeb7de208.jpg', '3', 'tabId7');
INSERT INTO `classify3` VALUES ('46', '肠道寄生虫', '../../src/assets/img/food/ce5df7df2d978a8d891b5888e338c096.jpg', '3', 'tabId8');
INSERT INTO `classify3` VALUES ('47', '特殊寄生虫', '../../src/assets/img/food/a215ce5148d36f5df1096c6175ad4d74.jpg', '3', 'tabId8');
INSERT INTO `classify3` VALUES ('48', '宠物体外', '../../src/assets/img/food/32f548891d46fc0ce7c45285670fcb97.jpg', '3', 'tabId8');
INSERT INTO `classify3` VALUES ('49', '环境驱虫', '../../src/assets/img/food/fc31c114ae1b994aab3775f207759095.jpg', '3', 'tabId8');
INSERT INTO `classify3` VALUES ('50', '内外通用', '../../src/assets/img/food/eb69538c90cf5ebc2c1867984a5d4a70.jpg', '3', 'tabId8');
INSERT INTO `classify3` VALUES ('51', '鸡肉', '../../src/assets/img/food/d194e15abbcc57cb5d926a606b2adee8.jpg', '4', 'tabId9');
INSERT INTO `classify3` VALUES ('52', '牛肉', '../../src/assets/img/food/13ddf8228fb7c3e2cb76b7fa5a302ab5.jpg', '4', 'tabId9');
INSERT INTO `classify3` VALUES ('53', '鱼肉', '../../src/assets/img/food/98f92ca30f29e24a1168c9d24998544c.jpg', '4', 'tabId9');
INSERT INTO `classify3` VALUES ('54', '鸭肉', '../../src/assets/img/food/70c20a272336884401f90781f5f93f21.jpg', '4', 'tabId9');
INSERT INTO `classify3` VALUES ('55', '火腿肠', '../../src/assets/img/food/740883924fe30cd19ab39e4df8ac7e82.jpg', '4', 'tabId9');
INSERT INTO `classify3` VALUES ('56', '洁齿类', '../../src/assets/img/food/b5a47fbb4bd448d6e72e680551341da4.jpg', '4', 'tabId10');
INSERT INTO `classify3` VALUES ('57', '真骨类', '../../src/assets/img/food/8b56a3aadb664d62949a23dcae756152.jpg', '4', 'tabId10');
INSERT INTO `classify3` VALUES ('58', '饼干类', '../../src/assets/img/food/6c05c175e8aac73009557a6c72f73157.jpg', '4', 'tabId10');
INSERT INTO `classify3` VALUES ('59', '咬胶类', '../../src/assets/img/food/c6ec859701f623d2701c2c180a19b291.jpg', '4', 'tabId10');
INSERT INTO `classify3` VALUES ('60', '罐头', '../../src/assets/img/food/6ed33fbc8aab39a532a4d62808685644.jpg', '4', 'tabId11');
INSERT INTO `classify3` VALUES ('61', '餐盒', '../../src/assets/img/food/871a5e0e10eff0f4068b723a3d68ffec.jpg', '4', 'tabId11');
INSERT INTO `classify3` VALUES ('62', '妙鲜包', '../../src/assets/img/food/2a8fb1e1f20773852ea85a4d2f919b89.jpg', '4', 'tabId11');
INSERT INTO `classify3` VALUES ('63', '布丁', '../../src/assets/img/food/93a11841adb75679d2495399dd069787.jpg', '4', 'tabId11');
INSERT INTO `classify3` VALUES ('64', '奶酪小食', '../../src/assets/img/food/47d523c73518af44a46121af322c48c2.jpg', '4', 'tabId11');
INSERT INTO `classify3` VALUES ('65', '饮料/冰淇淋', '../../src/assets/img/food/33ba17fe73c9b034bcda641450f46cb6.jpg', '4', 'tabId11');
INSERT INTO `classify3` VALUES ('66', '棉质玩具', '../../src/assets/img/food/37fbd2e1716712cdfb6a2c54b162219b.jpg', '4', 'tabId12');
INSERT INTO `classify3` VALUES ('67', '橡胶玩具', '../../src/assets/img/food/eddfa3376ed5ce6818fd6a2cb68f6437.jpg', '4', 'tabId12');
INSERT INTO `classify3` VALUES ('68', '塑料玩具', '../../src/assets/img/food/887ef1c7ef4139d789647b9039ece35e.jpg', '4', 'tabId12');
INSERT INTO `classify3` VALUES ('69', '发声玩具', '../../src/assets/img/food/f2894e7ee664cc99e7d07f97c504d850.jpg', '4', 'tabId12');
INSERT INTO `classify3` VALUES ('70', '漏食玩具', '../../src/assets/img/food/3a79a1b2f9bc13c9dc9088403089fde4.jpg', '4', 'tabId12');
INSERT INTO `classify3` VALUES ('71', '福莱希', '../../src/assets/img/food/af4fb0b986250099255637cc5b7a935b.jpg', '5', 'tabId13');
INSERT INTO `classify3` VALUES ('72', '颈圈', '../../src/assets/img/food/a057fb369e6ea020dd68477c009e9948.jpg', '5', 'tabId13');
INSERT INTO `classify3` VALUES ('73', '牵引套装', '../../src/assets/img/food/3ad12fd47920184ae73da05586e460eb.jpg', '5', 'tabId13');
INSERT INTO `classify3` VALUES ('74', '牵引带', '../../src/assets/img/food/7b27efef7fcf198d923fa877b3449ab1.jpg', '5', 'tabId13');
INSERT INTO `classify3` VALUES ('75', 'LED发光牵引', '../../src/assets/img/food/644470e284bd4de3321a666f4a7ef038.jpg', '5', 'tabId13');
INSERT INTO `classify3` VALUES ('76', 'P链/蛇链', '../../src/assets/img/food/644470e284bd4de3321a666f4a7ef038.jpg', '5', 'tabId13');
INSERT INTO `classify3` VALUES ('77', '外出餐具', '../../src/assets/img/food/b32aab554ae7b3a89c58c8f9e061fb37.jpg', '5', 'tabId14');
INSERT INTO `classify3` VALUES ('78', '拾便器', '../../src/assets/img/food/104c16b1b621c9f7e3259b5e1e9edbe1.jpg', '5', 'tabId14');
INSERT INTO `classify3` VALUES ('79', '外出包', '../../src/assets/img/food/51f6ee0dbe5549c7ab8016c004219cde.jpg', '5', 'tabId14');
INSERT INTO `classify3` VALUES ('80', '狗狗背包', '../../src/assets/img/food/0580f1e792ab83b5fd2f866df94a3e95.jpg', '5', 'tabId14');
INSERT INTO `classify3` VALUES ('81', '宠物车垫/安全带', '../../src/assets/img/food/848dce83f51cccb7d3aa96113b2dc07a.jpg', '5', 'tabId14');
INSERT INTO `classify3` VALUES ('82', '辅助用品', '../../src/assets/img/food/255a30bcd592774df72fad212ca67c9e.jpg', '5', 'tabId14');
INSERT INTO `classify3` VALUES ('83', '单碗', '../../src/assets/img/food/d354203958ad208e68f36f217b145602.jpg', '5', 'tabId15');
INSERT INTO `classify3` VALUES ('84', '双碗', '../../src/assets/img/food/ace66802c0ca25acc7d455599dc3a900.jpg', '5', 'tabId15');
INSERT INTO `classify3` VALUES ('85', '饮水器/机', '../../src/assets/img/food/9580da74abdc5ddee8786a9e11f57f22.jpg', '5', 'tabId15');
INSERT INTO `classify3` VALUES ('86', '自动喂食器', '../../src/assets/img/food/664bc343a4dd1e7fe4368e9b6ebf4f64.jpg', '5', 'tabId15');
INSERT INTO `classify3` VALUES ('87', '缓食/防溢碗', '../../src/assets/img/food/64fb9d89261145b02b57fd41aeb89155.jpg', '5', 'tabId15');
INSERT INTO `classify3` VALUES ('88', '辅助用品', '../../src/assets/img/food/793279f8a40a6e9d2295ef5297976e3b.jpg', '5', 'tabId15');
INSERT INTO `classify3` VALUES ('89', '除味消毒/配件', '../../src/assets/img/food/c4f76a200c5ec414f26969727da31011.jpg', '5', 'tabId16');
INSERT INTO `classify3` VALUES ('90', '厕所', '../../src/assets/img/food/360339363d09f659b9abe77de0946cbb.jpg', '5', 'tabId16');
INSERT INTO `classify3` VALUES ('91', '尿片/尿裤', '../../src/assets/img/food/3261084199ac12ae5f436036bbf17ae0.jpg', '5', 'tabId16');
INSERT INTO `classify3` VALUES ('92', '洗手液/湿巾', '../../src/assets/img/food/8199050e1f1ec7d9d432df3b68aa9559.jpg', '5', 'tabId16');
INSERT INTO `classify3` VALUES ('93', '清洁灭菌工具', '../../src/assets/img/food/f087e41b546a9ec9f07b1dadef38e978.jpg', '5', 'tabId16');
INSERT INTO `classify3` VALUES ('94', '杀菌除虫', '../../src/assets/img/food/13e1c3fa11f56e819c3950c6fc9b1e81.jpg', '6', 'tabId17');
INSERT INTO `classify3` VALUES ('95', '消炎止痒', '../../src/assets/img/food/2607814e3c18f6b2e08779fe30764da0.jpg', '6', 'tabId17');
INSERT INTO `classify3` VALUES ('96', '低敏舒缓', '../../src/assets/img/food/3589b81851c716ffbc93bf614a07ee1d.jpg', '6', 'tabId17');
INSERT INTO `classify3` VALUES ('97', '金红护色', '../../src/assets/img/food/680209e3767a6c8c1202515029598d96.jpg', '6', 'tabId17');
INSERT INTO `classify3` VALUES ('98', '白毛专用', '../../src/assets/img/food/dbb012cc3e3b1ecceb3e5ec63b2c4952.jpg', '6', 'tabId17');
INSERT INTO `classify3` VALUES ('99', '深色专用', '../../src/assets/img/food/98dfb3845d73e15ee42d1d1b6e6bdc55.jpg', '6', 'tabId17');
INSERT INTO `classify3` VALUES ('100', '针梳/排梳', '../../src/assets/img/food/ec22e802b49f10c188e579f5ca18cb84.jpg', '6', 'tabId18');
INSERT INTO `classify3` VALUES ('101', '开结梳', '../../src/assets/img/food/38be3fe9e1136e064a12efd4e284e37e.jpg', '6', 'tabId18');
INSERT INTO `classify3` VALUES ('102', '除蚤梳', '../../src/assets/img/food/0400c839394d2d282f40a10bd1ad9efb.jpg', '6', 'tabId18');
INSERT INTO `classify3` VALUES ('103', '褪毛梳/配件 ', '../../src/assets/img/food/337ab2c87430a48442e4231e093f67dd.jpg', '6', 'tabId18');
INSERT INTO `classify3` VALUES ('104', '美容剪', '../../src/assets/img/food/b24f5fee3ebc7e3ef527bc1fc5ffe870.jpg', '6', 'tabId18');
INSERT INTO `classify3` VALUES ('105', '电推剪/配件', '../../src/assets/img/food/45bab2ff9ba18413cd114702bce8f128.jpg', '6', 'tabId18');
INSERT INTO `classify3` VALUES ('106', '洗澡刷', '../../src/assets/img/food/8c5ea271f2020f3a5659ae6016c67059.jpg', '6', 'tabId19');
INSERT INTO `classify3` VALUES ('107', '吸水毛巾', '../../src/assets/img/food/dc74048e44da00fa1aaa2a234f657066.jpg', '6', 'tabId19');
INSERT INTO `classify3` VALUES ('108', '稀释瓶', '../../src/assets/img/food/5e8ef70a50cb612331717b6dcab9d359.jpg', '6', 'tabId19');
INSERT INTO `classify3` VALUES ('109', '吹风机', '../../src/assets/img/food/9a7d4084617cf1befae20f1a584f394c.jpg', '6', 'tabId19');
INSERT INTO `classify3` VALUES ('110', '吹水机', '../../src/assets/img/food/15e1ca35f0853837f7eb7f64c83ff405.jpg', '6', 'tabId19');
INSERT INTO `classify3` VALUES ('111', '其他', '../../src/assets/img/food/f7b8513eac72bee396d31942cb3932d7.jpg', '6', 'tabId19');
INSERT INTO `classify3` VALUES ('112', '蓬松塑形', '../../src/assets/img/food/1c50a7a739f1a7a06d84d15e7f8a7a2a.jpg', '6', 'tabId20');
INSERT INTO `classify3` VALUES ('113', '滋养柔顺', '../../src/assets/img/food/a10ec1c16ffb848fd39e81a285cb67ae.jpg', '6', 'tabId20');
INSERT INTO `classify3` VALUES ('114', '除臭添香', '../../src/assets/img/food/d51c4b840484f8bbeda1dc30aadac0d6.jpg', '6', 'tabId20');
INSERT INTO `classify3` VALUES ('115', '超强去污', '../../src/assets/img/food/11db28b4022b14cdc6138c233af4d1b8.jpg', '6', 'tabId20');
INSERT INTO `classify3` VALUES ('116', '免洗干洗', '../../src/assets/img/food/fd69c8010ed0e0a65067d62fa7b1cd99.jpg', '6', 'tabId20');
INSERT INTO `classify3` VALUES ('117', '护毛用品', '../../src/assets/img/food/f048a2af26f8f64faf0cb0e35f549208.jpg', '6', 'tabId20');

-- ----------------------------
-- Table structure for clothcity
-- ----------------------------
DROP TABLE IF EXISTS `clothcity`;
CREATE TABLE `clothcity` (
  `goodsid` int(50) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '0',
  `oriprice` varchar(255) NOT NULL DEFAULT '0',
  `curprice` varchar(255) NOT NULL DEFAULT '0',
  `state` varchar(255) NOT NULL DEFAULT '0',
  `imgurl` varchar(255) NOT NULL DEFAULT '0',
  PRIMARY KEY (`goodsid`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of clothcity
-- ----------------------------
INSERT INTO `clothcity` VALUES ('1', '2017年新款 宠趣 印花不倒绒奶狗背心 宝蓝条纹3XS号', '6.44', '5.00', '立即购买', '../src/assets/img/navList/cloth1.jpg');
INSERT INTO `clothcity` VALUES ('2', '2017年新款 宠趣 印花不倒绒奶狗背心 宝蓝条纹XS号', '6.44', '5.00', '立即购买', '../src/assets/img/navList/cloth1.jpg');
INSERT INTO `clothcity` VALUES ('3', '2017年新款 宠趣 印花不倒绒奶狗背心 宝蓝条纹XXS号', '6.44', '5.00', '立即购买', '../src/assets/img/navList/cloth1.jpg');
INSERT INTO `clothcity` VALUES ('4', '2017年新款 宠趣 印花不倒绒奶狗背心 粉色迷彩3XS号', '6.44', '5.00', '立即购买', '../src/assets/img/navList/0e9b729c33ab085280d6dd358347d7b3.jpg');
INSERT INTO `clothcity` VALUES ('5', '2017年新款 宠趣 印花不倒绒奶狗背心 粉色迷彩XS号', '6.44', '5.00', '已售罄', '../src/assets/img/navList/0e9b729c33ab085280d6dd358347d7b3.jpg');
INSERT INTO `clothcity` VALUES ('6', '2017年新款 宠趣 印花不倒绒奶狗背心 粉色兔子3XS号', '6.44', '5.00', '立即购买', '../src/assets/img/navList/319b6a42b7f270c4ce1602ea071d8987.jpg');
INSERT INTO `clothcity` VALUES ('7', '2017年新款 宠趣 印花不倒绒奶狗背心 红黑格子XS号', '6.44', '5.00', '已售罄', '../src/assets/img/navList/66def7a14cc6663f71f67f68ada3751d.jpg');
INSERT INTO `clothcity` VALUES ('8', '宠趣 疯狂动物城插肩袖卫衣 粉色兔子L', '11.48', '10.00', '已售罄', '../src/assets/img/navList/fdcbdce0a28cb8c473db240afb4d275c.jpg');

-- ----------------------------
-- Table structure for collect
-- ----------------------------
DROP TABLE IF EXISTS `collect`;
CREATE TABLE `collect` (
  `collectId` int(222) NOT NULL AUTO_INCREMENT COMMENT '收藏id',
  `userId` int(222) DEFAULT NULL COMMENT '用户id',
  `goodId` int(222) DEFAULT NULL COMMENT '收藏的商品',
  PRIMARY KEY (`collectId`)
) ENGINE=MyISAM AUTO_INCREMENT=88 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of collect
-- ----------------------------
INSERT INTO `collect` VALUES ('36', '2', '14');
INSERT INTO `collect` VALUES ('29', '28', '9');
INSERT INTO `collect` VALUES ('30', '2', '11');
INSERT INTO `collect` VALUES ('28', '2', '10');
INSERT INTO `collect` VALUES ('35', '32', '4');
INSERT INTO `collect` VALUES ('87', '48', '14');
INSERT INTO `collect` VALUES ('40', '1', '2');
INSERT INTO `collect` VALUES ('60', '0', '0');
INSERT INTO `collect` VALUES ('64', '42', '0');
INSERT INTO `collect` VALUES ('86', '43', '14');

-- ----------------------------
-- Table structure for detailsimg
-- ----------------------------
DROP TABLE IF EXISTS `detailsimg`;
CREATE TABLE `detailsimg` (
  `detailsId` int(11) NOT NULL,
  `goodId` int(11) DEFAULT NULL,
  `detailsImg` varchar(255) DEFAULT NULL COMMENT '商品详情图',
  PRIMARY KEY (`detailsId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of detailsimg
-- ----------------------------

-- ----------------------------
-- Table structure for epetmarking1
-- ----------------------------
DROP TABLE IF EXISTS `epetmarking1`;
CREATE TABLE `epetmarking1` (
  `goodsid` varchar(50) NOT NULL,
  `name` varchar(255) NOT NULL,
  `oriPrice` int(255) NOT NULL COMMENT '原价',
  `curPrice` int(255) NOT NULL COMMENT '现价',
  `state` varchar(255) NOT NULL COMMENT '状态',
  `deadline` varchar(255) NOT NULL COMMENT '到期时间',
  `discount` int(255) NOT NULL COMMENT '折扣',
  `imgurl` varchar(255) NOT NULL,
  PRIMARY KEY (`goodsid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='清仓特价(一)';

-- ----------------------------
-- Records of epetmarking1
-- ----------------------------
INSERT INTO `epetmarking1` VALUES ('z1', '美国原装进口Puppy scoops 宠物冰淇淋 香草味 香草味', '99', '32', '我不新鲜', '2018-04-15到期', '3', '../src/assets/img/navList/b3a1cff26ed84cb759a895ad9b460a71.jpg');
INSERT INTO `epetmarking1` VALUES ('z10', '爱漫宝宝洁 超白祛黄滋养香波 250ml ', '26', '13', '我不新鲜', '2018-06-01到期', '5', '../src/assets/img/navList/e2c97df63d2c864edbbee07c13fe58dd.jpg');
INSERT INTO `epetmarking1` VALUES ('z11', '盛来知Sunrise 瑞丽佳 成犬粮 1.2kg ', '86', '45', '我不新鲜', '2018-06-01到期', '5', '../src/assets/img/navList/25e6967651d0fa33b7cc332947aaf823.jpg');
INSERT INTO `epetmarking1` VALUES ('z12', '哈利贝贝 犬用活力钙鲨鱼软骨粉 12g/袋x12袋/盒', '29', '16', '我不新鲜', '2018-06-01到期', '6', '../src/assets/img/navList/50baaa351ba6a2d69f07514af4154c04.jpg');
INSERT INTO `epetmarking1` VALUES ('z13', '德国特瑞仕TRIXIE 贪吃宝 犬用鱼油条 100g ', '18', '10', '我不新鲜', '2018-06-01到期', '6', '../src/assets/img/navList/1910f2334702755f99aa509fe4ebc10c.jpg');
INSERT INTO `epetmarking1` VALUES ('z14', '雅美特 无谷物鸭肉南极磷虾狗罐头   85g', '12', '6', '我不新鲜', '2018-06-02到期', '5', '../src/assets/img/navList/25cd0a7b598cf12e71ad52bce56fb597.jpg');
INSERT INTO `epetmarking1` VALUES ('z15', '誉丰 狗零食牛奶+鸡蛋机能小馒头 160g 牛奶+鸡蛋', '17', '9', '我不新鲜', '2018-06-02到期', '5', '../src/assets/img/navList/439e3577f462637499450b148698c9e0.jpg');
INSERT INTO `epetmarking1` VALUES ('z16', '誉丰 狗零食牛肉味机能小馒头 160g 牛肉', '17', '9', '我不新鲜', '2018-06-02到期', '5', '../src/assets/img/navList/a43702b8805f575b9415684f1e1439c9.jpg');
INSERT INTO `epetmarking1` VALUES ('z17', '澳大利亚丝倍亮Supercoat 老年犬全价犬粮 15kg 15kg', '488', '258', '我不新鲜', '2018-05-30到期', '5', '../src/assets/img/navList/1c65c440ab064789beb8f584b2ae2bcf.jpg');
INSERT INTO `epetmarking1` VALUES ('z18', '百德加Pitegra 全犬种全犬期犬粮 1.35KG 1.35kg', '95', '50', '我不新鲜', '2018-06-03到期', '5', '../src/assets/img/navList/5e068114dedb8d1ed9b4ab2c7a6e7661.jpg');
INSERT INTO `epetmarking1` VALUES ('z19', '爱漫宝宝洁 棕红毛宠物专用香波 250ml ', '26', '14', '我不新鲜', '2018-06-03到期', '4', '../src/assets/img/navList/23ca119fdc4f57f5e67ad93c2b7003b5.jpg');
INSERT INTO `epetmarking1` VALUES ('z2', '欧宠 狗狗增白喷剂 100ml 白色犬专用 ', '86', '35', '我不新鲜', '2018-05-01到期', '4', '../src/assets/img/navList/537e28fefe93b072073116f53cb4008f.jpg');
INSERT INTO `epetmarking1` VALUES ('z20', '爱漫宝宝洁 短硬直毛防脱香波 250ml', '26', '14', '我不新鲜', '2018-06-03到期', '4', '../src/assets/img/navList/b0022a921c4ca2445f87bd4bb6af981f.jpg');
INSERT INTO `epetmarking1` VALUES ('z3', '贝特爱思 真色彩蓝灰色染色剂 140g  蓝灰色 蓝灰色', '140', '57', '我不新鲜', '2018-05-06到期', '4', '../src/assets/img/navList/cc188ea8edf92c0bc7080b4ccabb8749.jpg');
INSERT INTO `epetmarking1` VALUES ('z4', '贝特爱思 真色彩蓝灰色染色剂 140g  蓝灰色 蓝灰色', '140', '57', '我不新鲜', '2018-05-06到期', '4', '../src/assets/img/navList/cc188ea8edf92c0bc7080b4ccabb8749.jpg');
INSERT INTO `epetmarking1` VALUES ('z5', '贝特爱思 真色彩杏黄色染色剂 140g  杏黄色 杏黄色', '140', '57', '我不新鲜', '2018-05-06到期', '4', '../src/assets/img/navList/e8aa989ee6ae0c4c9f647cd62c41499f.jpg');
INSERT INTO `epetmarking1` VALUES ('z6', '贝特爱思 比比朵深灰色染色剂 140g  深灰色 深灰色', '140', '57', '我不新鲜', '2018-05-06到期', '4', '../src/assets/img/navList/43f3b121872df267fe285efcc43adf26.jpg');
INSERT INTO `epetmarking1` VALUES ('z7', '多格漫旗下派滋露   猫用无添加橄榄美毛香波 200ml  ', '147', '72', '我不新鲜', '2018-05-28到期', '5', '../src/assets/img/navList/583864c1eb159563fbf9fbf6d61fa854.jpg');
INSERT INTO `epetmarking1` VALUES ('z8', '加拿大原装进口 Ubite 冻干三文鱼狗零食 80g', '85', '45', '我不新鲜', '2018-05-20到期', '5', '../src/assets/img/navList/d261d280260b89ae0583be4a5e4f2d33.jpg');
INSERT INTO `epetmarking1` VALUES ('z9', '英国GEM Doggie Bone 狗狗晴天洁齿乐骨头 3寸(单只装) 长7* 粗1.5cm', '16', '8', '我不新鲜', '2018-06-01到期', '5', '../src/assets/img/navList/14eccf71fc91f98f76c4777d5c329918.jpg');

-- ----------------------------
-- Table structure for epetmarking2
-- ----------------------------
DROP TABLE IF EXISTS `epetmarking2`;
CREATE TABLE `epetmarking2` (
  `goodsid` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `oriPrice` int(255) NOT NULL,
  `curPrice` int(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `defect` varchar(255) NOT NULL COMMENT '缺点',
  `discount` int(255) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  PRIMARY KEY (`goodsid`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COMMENT='清仓特价（下）';

-- ----------------------------
-- Records of epetmarking2
-- ----------------------------
INSERT INTO `epetmarking2` VALUES ('1', '美国原装进口RW拉夫威尔   雪穴防寒服 暮光灰 XXS XXS', '647', '258', '我有瑕疵', '无外包装，有使用痕迹', '4', '../src/assets/img/navList/epetMark1.jpg');
INSERT INTO `epetmarking2` VALUES ('2', 'Flexi福莱希 马达加斯加系列 伸缩牵引带 绳状 M号 M 蓝色', '185', '157', '我有瑕疵', '包装变形', '8', '../src/assets/img/navList/52d4f4d7708e46465107b1b35bb2240c.jpg');
INSERT INTO `epetmarking2` VALUES ('3', '意大利原装进口United Pets 宠物干粮收容桶 黑色 直径20cm*高28cm 黑色', '309', '278', '我不完美', '包装破损', '9', '../src/assets/img/navList/c7e558d6010dc4b5b41f0d541df6e8e8.jpg');
INSERT INTO `epetmarking2` VALUES ('4', '宝路 幼犬鸡肉妙鲜包 85g*12袋装 整盒装 鸡肉', '40', '37', '我不完美', '包装破损', '9', '../src/assets/img/navList/80ec1b70f3093bc1d6d065857bd312c1.jpg');
INSERT INTO `epetmarking2` VALUES ('5', '美国原装进口 梅里亚 牙口乐犬用口腔清洁棒 M 14支/盒 441g 整盒装 M', '128', '121', '我有瑕疵', '包装变形，2018-7-27到期', '9', '../src/assets/img/navList/e3afe9cf5d6b7cfc0b048c229e7778fe.jpg');
INSERT INTO `epetmarking2` VALUES ('6', '澳洲原装进口 灵动LINGDOK 全犬种成犬粮 1.5kg（6包*250g/包） 1.5kg', '110', '105', '我有瑕疵', '外包装变形，2019-4-14到期', '9', '../src/assets/img/navList/4d4ed777c3f722b03ca604b25aec4d0b.jpg');
INSERT INTO `epetmarking2` VALUES ('7', '福来恩 第二代犬滴剂 8周以上 中型 体重10-20KG 整盒装 整盒 中型', '165', '157', '我不完美', '包装破损,2020-03-01到期', '9', '../src/assets/img/navList/0025ca811a2c3160f67e1596a933f322.jpg');
INSERT INTO `epetmarking2` VALUES ('8', '瑞斯克Resco 疏密双齿排梳(短齿款) 总长17cm*针长2.2cm ', '208', '145', '我有瑕疵', '外包装有磨损划痕', '7', '../src/assets/img/navList/c0ed059fd2d8fe83c87a50ef119fcecf.jpg');
INSERT INTO `epetmarking2` VALUES ('9', '玫斯METZ 配方全犬粮 1.36kg(3lb)  3磅', '106', '85', '我有瑕疵', '已被使用过,介意者勿拍', '8', '../src/assets/img/navList/b63ca770e450cc0904d02f76de29c696.jpg');
INSERT INTO `epetmarking2` VALUES ('10', '欧洲原装进口Julius k9 轻量化红色胸背 Mini-Mini号 胸围40-53cm Mini-Mini号 红色', '199', '159', '我有瑕疵', '已被使用过,有宠物毛', '8', '../src/assets/img/navList/f0e825e557c968df71479d90bc4bc40d.jpg');
INSERT INTO `epetmarking2` VALUES ('11', '光能净 宠物空气净化蛋 大号 大号', '398', '338', '我不完美', '外包装破损，商品完好', '8', '../src/assets/img/navList/5e19cdbbee4d142ca774dc2a28ca8617.jpg');
INSERT INTO `epetmarking2` VALUES ('12', '弗尔莱葆 犬用益肠宝 6袋/盒  ', '60', '51', '我不完美', '包装破损,2020-1-2到期', '8', '../src/assets/img/navList/e50d863a0f2cf758b1d8f00925c3dff6.jpg');
INSERT INTO `epetmarking2` VALUES ('13', 'Vivipet 犬用餐桌斜面碗架（仅碗架） 黑色 碗孔直径13.5cm 黑色', '219', '186', '我不完美', '包装破损，变形', '8', '../src/assets/img/navList/9cdcf4e2370e5127589275690331152e.jpg');
INSERT INTO `epetmarking2` VALUES ('14', '新宠之康 伊耳康滴耳液 60ml', '25', '21', '我有瑕疵', '已被使用过,介意者勿拍', '8', '../src/assets/img/navList/4fe0d609690547aa65ba984f9cf70ffc.jpg');
INSERT INTO `epetmarking2` VALUES ('15', '英国MAG 金维他宠物营养粉 5g*12袋', '48', '41', '我不完美', '包装破损,2019-7-20到期', '8', '../src/assets/img/navList/c8d6a265f60e93c5ad03ac3777f142e5.jpg');
INSERT INTO `epetmarking2` VALUES ('16', '美国原装进口 多美洁Tropiclean 天然清新口气专业护齿三件套 小型犬用 小型', '189', '170', '我不完美', '外包装轻微破损，商品完好', '9', '../src/assets/img/navList/3980b13cc158b04ad1952a370ffc4e69.jpg');
INSERT INTO `epetmarking2` VALUES ('17', '优卡EuKanuba 大型犬幼犬粮 15kg 15kg', '750', '675', '我不完美', '包装轻微破损,2018-9-18到期', '9', '../src/assets/img/navList/368c87eacfcdec601965d8ca10954b4b.jpg');
INSERT INTO `epetmarking2` VALUES ('18', '美国KONG 不倒翁喂食器系列 漏食球玩具 红色 L L', '174', '157', '我有瑕疵', '包装变形', '9', '../src/assets/img/navList/8e74aad33dfa12ca224d6556fa02926e.jpg');
INSERT INTO `epetmarking2` VALUES ('19', '玫斯METZ 小型犬肠道护理粮 1.36kg(3lb)', '103', '93', '我有瑕疵', '防伪刮花，2019-3-13到期', '9', '../src/assets/img/navList/e5969f50a14ea92b2d1470c47b154f10.jpg');
INSERT INTO `epetmarking2` VALUES ('20', '随行者 精制竹纤维胸背带牵引套装 M 苹果绿 适合胸围50-76cm M 苹果绿', '95', '52', '我有瑕疵', '有使用过的痕迹，无吊牌', '6', '../src/assets/img/navList/b8348338d8033afd8f306bf15c1464e4.jpg');

-- ----------------------------
-- Table structure for epetmarking3
-- ----------------------------
DROP TABLE IF EXISTS `epetmarking3`;
CREATE TABLE `epetmarking3` (
  `goodsid` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `oriPrice` int(255) NOT NULL,
  `curPrice` int(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `deadline` varchar(255) NOT NULL,
  `discount` int(255) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  PRIMARY KEY (`goodsid`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COMMENT='特价清仓（价格上）';

-- ----------------------------
-- Records of epetmarking3
-- ----------------------------
INSERT INTO `epetmarking3` VALUES ('1', '雅美特 无谷物鸭肉南极磷虾狗罐头   85g', '12', '6', '我不新鲜', '2018-06-02到期', '5', '../src/assets/img/navList/25cd0a7b598cf12e71ad52bce56fb597.jpg');
INSERT INTO `epetmarking3` VALUES ('2', '蒙贝 羊腿新鲜蔬菜狗罐头 100g 羊肉', '8', '6', '我有瑕疵', '已被使用过,介意者勿拍', '8', '../src/assets/img/navList/b655cfe47f92a4d867d28e19de46c972.jpg');
INSERT INTO `epetmarking3` VALUES ('3', '哈特丽Hateli  狗用卡通伊丽莎白圈 S号 颜色随机发  S S', '12', '8', '我有瑕疵', '有使用过的痕迹，有宠物毛', '7', '../src/assets/img/navList/d2412616e1a74ab0f0d7c754eb26b35c.jpg');
INSERT INTO `epetmarking3` VALUES ('4', '英国GEM Doggie Bone 狗狗晴天洁齿乐骨头 3寸(单只装) 长7* 粗1.5cm', '16', '9', '我不新鲜', '2018-06-01到期', '5', '../src/assets/img/navList/14eccf71fc91f98f76c4777d5c329918.jpg');
INSERT INTO `epetmarking3` VALUES ('5', '誉丰 狗零食牛奶+鸡蛋机能小馒头 160g 牛奶+鸡蛋', '17', '9', '我不新鲜', '2018-06-02到期', '5', '../src/assets/img/navList/439e3577f462637499450b148698c9e0.jpg');
INSERT INTO `epetmarking3` VALUES ('6', '誉丰 狗零食牛肉味机能小馒头 160g 牛肉', '18', '9', '我不新鲜', '2018-06-02到期', '5', '../src/assets/img/navList/a43702b8805f575b9415684f1e1439c9.jpg');
INSERT INTO `epetmarking3` VALUES ('7', '德国特瑞仕TRIXIE 贪吃宝 犬用鱼油条 100g ', '18', '10', '我不新鲜', '2018-06-01到期', '5', '../src/assets/img/navList/1910f2334702755f99aa509fe4ebc10c.jpg');
INSERT INTO `epetmarking3` VALUES ('8', '宠趣 超人大白插肩袖卫衣 黄色XL号 XL 黄色', '14', '10', '我有瑕疵', '有使用过的痕迹', '7', '../src/assets/img/navList/520d22b2035144474d23edf5ee91a861.jpg');
INSERT INTO `epetmarking3` VALUES ('9', '禾仕嘉 鸡肉面包系列 鸡肉羊角面包 90g', '14', '11', '我有瑕疵', '日期模糊，同批次为2019-05-10到期', '8', '../src/assets/img/navList/c5e2340c2aaefae194932394a3a584fe.jpg');
INSERT INTO `epetmarking3` VALUES ('10', '2017年新款 PETCIRCLE宠物圈 52号数字印花卫衣 灰色XXS号 XXS 灰色', '16', '11', '我有瑕疵', '有使用过的痕迹，有宠物毛', '7', '../src/assets/img/navList/88c4e2c973f07e6bb9d66ca324e19ed8.jpg');
INSERT INTO `epetmarking3` VALUES ('11', '爱漫宝宝洁 超白祛黄滋养香波 250ml ', '26', '14', '我不新鲜', '2018-06-01到期', '5', '../src/assets/img/navList/e2c97df63d2c864edbbee07c13fe58dd.jpg');
INSERT INTO `epetmarking3` VALUES ('12', '爱漫宝宝洁 棕红毛宠物专用香波 250ml ', '26', '14', '我不新鲜', '2018-06-01到期', '5', '../src/assets/img/navList/23ca119fdc4f57f5e67ad93c2b7003b5.jpg');
INSERT INTO `epetmarking3` VALUES ('13', '爱漫宝宝洁 短硬直毛防脱香波 250ml', '26', '14', '我不新鲜', '2018-06-01到期', '5', '../src/assets/img/navList/b0022a921c4ca2445f87bd4bb6af981f.jpg');
INSERT INTO `epetmarking3` VALUES ('14', '2017年新款 迈蔻MKO 我爱爸爸妈妈加绒卫衣 天蓝XL号 XL 天蓝', '21', '15', '我有瑕疵', '有使用过的痕迹，有宠物毛', '7', '../src/assets/img/navList/e704d27eebf580de3b1fc85b1bb32514.jpg');
INSERT INTO `epetmarking3` VALUES ('15', '蒙贝 天然带肉牛棒骨 S号  小号', '19', '15', '我不完美', '包装破损,2019-06-29到期', '8', '../src/assets/img/navList/e967fa05468c83df86b3ef375642bdd0.jpg');
INSERT INTO `epetmarking3` VALUES ('16', '哈特丽 骨头手柄脱毛梳子 褪毛梳 大号 14.7cm ', '22', '16', '我不完美', '包装破损', '7', '../src/assets/img/navList/8152c0380673934664fd430429656e0b.jpg');

-- ----------------------------
-- Table structure for epetmarking4
-- ----------------------------
DROP TABLE IF EXISTS `epetmarking4`;
CREATE TABLE `epetmarking4` (
  `goodsid` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `oriPrice` int(255) NOT NULL,
  `curPrice` int(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `deadline` varchar(255) NOT NULL,
  `discount` int(255) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  PRIMARY KEY (`goodsid`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COMMENT='特价清仓(价格下)';

-- ----------------------------
-- Records of epetmarking4
-- ----------------------------
INSERT INTO `epetmarking4` VALUES ('1', '优卡EuKanuba 大型犬幼犬粮 15kg 15kg', '750', '675', '我不完美', '包装轻微破损,2018-9-18到期', '9', '../src/assets/img/navList/368c87eacfcdec601965d8ca10954b4b.jpg');
INSERT INTO `epetmarking4` VALUES ('2', '美国原装进口RW拉夫威尔  格力普全地形保护鞋 大号  4只/套 红色  红色 大号', '689', '482', '我有瑕疵', '试穿过，介意者勿拍', '7', '../src/assets/img/navList/61b00f7a87d4986834df1803f6288970.jpg');
INSERT INTO `epetmarking4` VALUES ('3', '美国原装进口顶间 洁毛护肤系列 猫咪超白洗毛精 1加仑(3.78L) 1加仑', '753', '414', '我不新鲜', '2018-2-19到期', '6', '../src/assets/img/navList/2ffe2164e9f2145c6af6920392e39b33.jpg');
INSERT INTO `epetmarking4` VALUES ('4', '珍宝SANPO 珍爱多 约克夏梗幼犬粮 12kg 12kg', '480', '408', '我有瑕疵', '包装变形，2019-03-18到期', '8', '../src/assets/img/navList/9f82f47b6e9265c62a0d0da4b4556d73.jpg');
INSERT INTO `epetmarking4` VALUES ('5', '珍宝SANPO 珍爱多 约克夏梗成犬粮 12kg 12kg', '450', '382', '我有瑕疵', '包装变形', '8', '../src/assets/img/navList/9f82f47b6e9265c62a0d0da4b4556d73.jpg');
INSERT INTO `epetmarking4` VALUES ('6', '美国贝适安Petsafe旗下Eatwell  5餐型宠物定时自动喂食器 230g*5个食格', '465', '372', '我不完美', '包装破损,有使用过的痕迹', '8', '../src/assets/img/navList/a6ac88c10d64579be5e316f59a10f826.jpg');
INSERT INTO `epetmarking4` VALUES ('7', '光能净 宠物空气净化蛋 大号 大号', '398', '338', '我不完美', '外包装破损，商品完好', '8', '../src/assets/img/navList/5e19cdbbee4d142ca774dc2a28ca8617.jpg');
INSERT INTO `epetmarking4` VALUES ('8', '新西兰品牌 途乐士TORUS 自动滤净宠物水碗 2升 高端红 2升 高端红', '375', '318', '我不完美', '包装破损', '8', '../src/assets/img/navList/e19e62aa3aec9d770290f10cb7e0af44.png');
INSERT INTO `epetmarking4` VALUES ('9', '美国进口 Worldwise SHERPA 宠物立体便携包 黑色大号 大号 黑色', '426', '298', '我不完美', '包装破损,有使用过的痕迹', '7', '../src/assets/img/navList/cb39b7a3e2ca377c69af3b4b8edeabd2.jpg');
INSERT INTO `epetmarking4` VALUES ('10', '美国Petsafe贝适安旗下Drinkwell 陶瓷款活氧喷泉饮水机 2L', '720', '288', '我有瑕疵', '差密封圈和底座配件', '4', '../src/assets/img/navList/415011f699d2c4649c29bf61fe6948ed.jpg');
INSERT INTO `epetmarking4` VALUES ('11', '美国进口Petmate 全自动精准分量自动喂食器 5磅(约4.5斤) 5磅', '469', '257', '我不完美', '外包装变形破损', '6', '../src/assets/img/navList/30dc94bbf916275c71614e1f52a96a23.jpg');
INSERT INTO `epetmarking4` VALUES ('12', '美国Solvit 尊享版宠物车载垫 后排绗缝坐垫加宽版 灰色 加宽码 灰色', '428', '278', '我不完美', '我不完美', '6', '../src/assets/img/navList/257423c77b764dd37f1a3fa75538afc6.jpg');
INSERT INTO `epetmarking4` VALUES ('13', '意大利原装进口United Pets 宠物干粮收容桶 黑色 直径20cm*高28cm 黑色', '309', '218', '我不完美', '包装破损', '9', '../src/assets/img/navList/c7e558d6010dc4b5b41f0d541df6e8e8.jpg');
INSERT INTO `epetmarking4` VALUES ('14', '美国原装进口RW拉夫威尔   雪穴防寒服 暮光灰 XXS XXS', '647', '226', '我有瑕疵', '无外包装，有使用痕迹', '3', '../src/assets/img/navList/b73cea8883d2acbb4af11e883060abf0.jpg');
INSERT INTO `epetmarking4` VALUES ('15', '澳大利亚丝倍亮Supercoat 老年犬全价犬粮 15kg 15kg', '488', '258', '我不新鲜', '2018-05-30到期', '5', '../src/assets/img/navList/1c65c440ab064789beb8f584b2ae2bcf.jpg');
INSERT INTO `epetmarking4` VALUES ('16', '美国Solvit 尊享版宠物车载垫 后排绗缝坐垫加宽版 灰色 加宽码 灰色', '428', '256', '我不完美', '包装变形破损', '6', '../src/assets/img/navList/257423c77b764dd37f1a3fa75538afc6.jpg');
INSERT INTO `epetmarking4` VALUES ('17', '美国Solvit 尊享版宠物车载垫 后排绗缝坐垫加宽版 军绿色 加宽码 军绿色', '398', '238', '我不完美', '包装变形破损', '6', '../src/assets/img/navList/71bb8fe2b6322d419671766d5fdbc6c9.jpg');
INSERT INTO `epetmarking4` VALUES ('18', '美国Solvit 尊享版宠物车载垫 后排绗缝坐垫 军绿色 标准码 军绿色', '428', '235', '我有瑕疵', '包装破损变形', '5', '../src/assets/img/navList/257423c77b764dd37f1a3fa75538afc6.jpg');
INSERT INTO `epetmarking4` VALUES ('19', '玫斯METZ 无谷物小型犬奶糕粮 6.8kg(15lb)  15磅', '396', '233', '我不新鲜', '2018-05-20到期', '6', '../src/assets/img/navList/8e93c89c58ea0afb7814af756dde6bac.jpg');
INSERT INTO `epetmarking4` VALUES ('20', '欧洲原装进口Julius k9 日常胸背 0号德国国旗 0号', '389', '233', '我有瑕疵', '已被使用过,有宠物毛，无吊牌', '6', '../src/assets/img/navList/c865e96af2b179d51e35189c460b795b.jpg');
INSERT INTO `epetmarking4` VALUES ('21', '新西兰品牌 途乐士TORUS 自动滤净宠物水碗 2升 靓丽粉 2升 靓丽粉', '375', '225', '我不完美', '外包装破损，商品完好', '6', '../src/assets/img/navList/073b524b77af6af8d421183bcc93027d.jpg');
INSERT INTO `epetmarking4` VALUES ('22', '欧洲原装进口 Julius k9 IDC防爆冲胸背带0号 俄罗斯国旗 胸围58-76cm 0号 俄罗斯国旗', '369', '221', '我有瑕疵', '有使用过的痕迹，有宠物毛', '6', '../src/assets/img/navList/1d6ca09e4e5e02c638654730776d1562.jpg');
INSERT INTO `epetmarking4` VALUES ('23', '新西兰品牌 途乐士TORUS 自动滤净宠物水碗 1升 高端红 1升 高端红', '355', '213', '我不完美', '外包装破损，商品完好', '6', '../src/assets/img/navList/f94aa25027bbe99107f71f497f301527.png');

-- ----------------------------
-- Table structure for epetteamgoods
-- ----------------------------
DROP TABLE IF EXISTS `epetteamgoods`;
CREATE TABLE `epetteamgoods` (
  `goodsid` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品id',
  `curteamprice` int(11) DEFAULT NULL COMMENT '团购价',
  `goodsname` varchar(50) DEFAULT NULL COMMENT '商品名称',
  `personteam` varchar(50) DEFAULT NULL COMMENT '成团购买人数',
  `savemoney` varchar(11) DEFAULT NULL COMMENT '节省价格',
  `oriprice` int(11) DEFAULT NULL COMMENT '单人买原价',
  `goodsimg` varchar(255) DEFAULT NULL COMMENT 'imgurl',
  `teambuied` varchar(50) DEFAULT NULL COMMENT '已支付人数',
  PRIMARY KEY (`goodsid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COMMENT='e宠团商品数据';

-- ----------------------------
-- Records of epetteamgoods
-- ----------------------------
INSERT INTO `epetteamgoods` VALUES ('1', '28', '金宠 宠物天然除臭剂300ml 柠檬味', '3人成团', '立省28.00', '56', '../src/assets/img/navList/377cbe4c849d4dd217992a2642a75eb9.jpg', '10人已支付');
INSERT INTO `epetteamgoods` VALUES ('2', '45', '乐宝LeBo   浓缩卵磷脂 300g', '3人成团', '立省45.00', '90', '../src/assets/img/navList/88489bef9478289616e10bd51a0a4ee2.jpg', '9人已支付');
INSERT INTO `epetteamgoods` VALUES ('3', '75', '优基 益生菌中大型幼犬粮 2kg', '3人成团', '立省13.20', '88', '../src/assets/img/navList/eTeamGoods1.jpg', '9人已支付');
INSERT INTO `epetteamgoods` VALUES ('4', '136', '蓝氏LegendSandy 天然鹿肉小米全犬粮 9磅(4.08kg)  ', '3人成团', '立省24.00', '160', '../src/assets/img/navList/539d1f8e130b3c93c8e61ec288ddbcea.jpg', '26人已支付');
INSERT INTO `epetteamgoods` VALUES ('5', '375', '优卡EuKanuba 大型犬幼犬粮 16kg', '3人成团', '立省375.00', '750', '../src/assets/img/navList/93a838993f5dcc26d31af374cd384352.jpg', '28人已支付');
INSERT INTO `epetteamgoods` VALUES ('6', '48', '卫仕 配方卵磷脂颗粒 220g（升级2.0）', '3人成团', '立省12.00', '60', '../src/assets/img/navList/9dfb34bcbc7e48a27a0e60e5af638184.jpg', '15人已支付');
INSERT INTO `epetteamgoods` VALUES ('7', '49', '福来恩 第二代犬滴剂 8周以上 中型 体重10-20kg 单支装', '3人成团', '立省5.50', '55', '../src/assets/img/navList/1f0fc3b14fdaac013d8c0c7b3503e992.jpg', '78人已支付');
INSERT INTO `epetteamgoods` VALUES ('8', '40', '世佳Snausages 复合微量元素 480g', '3人成团', '立省40.00', '80', '../src/assets/img/navList/1f0fc3b14fdaac013d8c0c7b3503e992.jpg', '19人已支付');
INSERT INTO `epetteamgoods` VALUES ('9', '23', '顽皮Wanpy 犬用香脆牛肝片180g', '3人成团', '立省5.98', '29', '../src/assets/img/navList/1f0fc3b14fdaac013d8c0c7b3503e992.jpg', '26人已支付');
INSERT INTO `epetteamgoods` VALUES ('10', '78', '比瑞吉 健康型天然粮 小型犬幼犬粮 1.5kg', '3人成团', '立省13.80', '92', '../src/assets/img/navList/8cf74fb7b95920cb6ca6a402221e61e3.jpg', '3人已支付');

-- ----------------------------
-- Table structure for etopbar
-- ----------------------------
DROP TABLE IF EXISTS `etopbar`;
CREATE TABLE `etopbar` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '0',
  `price` varchar(255) NOT NULL DEFAULT '0',
  `introduce` varchar(255) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='潮品预售';

-- ----------------------------
-- Records of etopbar
-- ----------------------------
INSERT INTO `etopbar` VALUES ('1', '../src/assets/img/navList/6db510013175d9ca8055dc4dedce45a9.png', '小蚁智家  宠物陪伴机器人 黄色 36.3*23.2*28.2cm', '2988.00', '200万高清摄像头，APP远程遥控三段发球距离与奖励，语音互动随时随地陪伴爱宠。\r\n            ');
INSERT INTO `etopbar` VALUES ('2', '../src/assets/img/navList/2fdb1e982cb627e8a8e7948fa1ac20ff.jpg', '美国Solvit 豪华版车载垫 环抱版绗缝坐垫 棕色S号', '128.00', '专为宠物出行设计，暖绒绒的垫子，四周包裹给它妈妈怀抱般的温暖');
INSERT INTO `etopbar` VALUES ('3', '../src/assets/img/navList/cb66ef5729dc5e20ff8461cbc55b3473.jpg', '韩国POTE 鱼骨木屋房子 68*42*35cm', '7798.00', '韩国设计师倾力打造全木榫结构宠物窝，全窝无螺钉,制造原始住所，给爱宠精神上的富足归属感');
INSERT INTO `etopbar` VALUES ('4', '../src/assets/img/navList/2df08c8aed374f89ffb68c6bee5de69f.jpg', '法国原装进口clebard 狗狗懒人床垫 70*70*12cm', '2800.00', '睡上会变“懒”的垫子，红酒瓶塞材质填充垫子，可实现垫子多样变形，符合狗狗睡眠，让睡眠更舒适。');
INSERT INTO `etopbar` VALUES ('5', '../src/assets/img/navList/b6b0d1c3fd0c396b347493486de71c80.jpg', '日本Airbuggy 宠物外出手推车 M号 适合15kg以内宠物', '1750.00', 'M号多功能宠物手推车，可做外出包使用，车架折叠方便，充气轮胎减震效果好，适合15kg以内小型犬猫逛街出游。');

-- ----------------------------
-- Table structure for farmfood
-- ----------------------------
DROP TABLE IF EXISTS `farmfood`;
CREATE TABLE `farmfood` (
  `farmfoodid` int(50) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '0',
  `oriprice` varchar(255) NOT NULL DEFAULT '0',
  `curprice` varchar(255) NOT NULL DEFAULT '0',
  `imgurl` varchar(255) NOT NULL DEFAULT '0',
  PRIMARY KEY (`farmfoodid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of farmfood
-- ----------------------------
INSERT INTO `farmfood` VALUES ('1', '约翰农场 农场鸭排  200g', '35.00', '29.75', '../src/assets/img/navList/bf025e27bb3439180a1b4493863b08fc.jpg');
INSERT INTO `farmfood` VALUES ('2', '约翰农场 田园鸭肉软棒 200g', '36.90', '31.37', '../src/assets/img/navList/0849523c958cd32a6dd59e5681b9b42b.jpg');
INSERT INTO `farmfood` VALUES ('3', '约翰农场 鳕鱼鸡肉卷  100g', '17.50', '14.88', '../src/assets/img/navList/8b5db19704b84891478f30a59542482f.jpg');
INSERT INTO `farmfood` VALUES ('4', '约翰农场 农场鸡肉棒  100g', '17.50', '14.88', '../src/assets/img/navList/01534387fddf4da97425541e54ebcdbc.jpg');
INSERT INTO `farmfood` VALUES ('5', '约翰农场 田园鸭肉饼 200g', '36.90', '31.37', '../src/assets/img/navList/96dd7af9d7716a99fa29237388616800.jpg');

-- ----------------------------
-- Table structure for indeximg
-- ----------------------------
DROP TABLE IF EXISTS `indeximg`;
CREATE TABLE `indeximg` (
  `imgid` int(50) NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`imgid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COMMENT='首页几张小图';

-- ----------------------------
-- Records of indeximg
-- ----------------------------
INSERT INTO `indeximg` VALUES ('1', '../src/assets/img/navList/01.jpg');
INSERT INTO `indeximg` VALUES ('2', '../src/assets/img/navList/03.jpg');
INSERT INTO `indeximg` VALUES ('3', '../src/assets/img/navList/04.jpg');
INSERT INTO `indeximg` VALUES ('4', '../src/assets/img/navList/7ce4cf16523d3563d02252bd52274713.png');
INSERT INTO `indeximg` VALUES ('5', '../src/assets/img/navList/773485b90f2f4abaeb1f8af9216702c0.jpg');
INSERT INTO `indeximg` VALUES ('6', '../src/assets/img/navList/e852d9d322e2c38874214db47f642f79.jpg');
INSERT INTO `indeximg` VALUES ('7', '../src/assets/img/navList/78fe398afc93702c1f694c6294a6c06a.jpg');
INSERT INTO `indeximg` VALUES ('8', '../src/assets/img/navList/12e5f255d11892ea061d38f26bc83b1c.jpg');
INSERT INTO `indeximg` VALUES ('9', '../src/assets/img/navList/efa5f2c5b66de3e734f725092d2a8525.jpg');
INSERT INTO `indeximg` VALUES ('10', '../src/assets/img/navList/adbb57a6590da63f5f63d2f143047dbc.jpg');

-- ----------------------------
-- Table structure for mengbei
-- ----------------------------
DROP TABLE IF EXISTS `mengbei`;
CREATE TABLE `mengbei` (
  `mengbeiid` int(50) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '0',
  `curprice` varchar(255) NOT NULL DEFAULT '0',
  `oriprice` varchar(255) NOT NULL DEFAULT '0',
  `imgurl` varchar(255) NOT NULL DEFAULT '0',
  PRIMARY KEY (`mengbeiid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mengbei
-- ----------------------------
INSERT INTO `mengbei` VALUES ('1', '蒙贝 天然带肉牛棒骨 L号', '19.00', '29.80', '../src/assets/img/navList/874d77c8e14318417e182b8c9ffab4f6.jpg');
INSERT INTO `mengbei` VALUES ('2', '蒙贝 天然牛腕骨 1只', '12.00', '16.50', '../src/assets/img/navList/83b21cd8bd2ebe1b51b34755478ee0c9.jpg');
INSERT INTO `mengbei` VALUES ('3', '蒙贝 酪咔奶泡 160g', '26.00', '38.00', '../src/assets/img/navList/7b6aadb26ac751a6cfeb66e5ad2fac17.jpg');
INSERT INTO `mengbei` VALUES ('4', '蒙贝 6月以上中小型犬 天然小龙骨 6片', '13.00', '19.80', '../src/assets/img/navList/93a0ff47919bb4c78398eb6ad5cca0e7.jpg');
INSERT INTO `mengbei` VALUES ('5', '蒙贝 牛肉碎条 200g', '10.00', '14.80', '../src/assets/img/navList/1c0fefd3ba2c12b2de1b77a93baf224e.jpg');

-- ----------------------------
-- Table structure for moshm
-- ----------------------------
DROP TABLE IF EXISTS `moshm`;
CREATE TABLE `moshm` (
  `moshmid` int(50) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT '0',
  `curprice` varchar(255) DEFAULT '0',
  `oriprice` varchar(255) DEFAULT '0',
  `imgurl` varchar(255) DEFAULT '0',
  PRIMARY KEY (`moshmid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of moshm
-- ----------------------------
INSERT INTO `moshm` VALUES ('1', '麦仕 贵宾犬多肉无谷全期粮 1.5kg', '95.40', '106.00', '../src/assets/img/navList/82d200cc000c50190df50880f258be04.jpg');
INSERT INTO `moshm` VALUES ('2', '麦仕 贵宾犬多肉无谷全期粮 10kg', '439.00', '488.00', '../src/assets/img/navList/88e781d6a6cf1880170b5d955109a239.jpg');
INSERT INTO `moshm` VALUES ('3', '麦仕 小型犬多肉无谷全期粮 1.5kg', '82.80', '92.00', '../src/assets/img/navList/c68cb975110910709d45269a0ad3ac6c.jpg');
INSERT INTO `moshm` VALUES ('4', '麦仕 小型犬多肉无谷全期粮 2kg', '104.00', '116.00', '../src/assets/img/navList/c68cb975110910709d45269a0ad3ac6c.jpg');
INSERT INTO `moshm` VALUES ('5', '麦仕 小型犬多肉无谷全期粮 10kg', '414.00', '460.00', '../src/assets/img/navList/c68cb975110910709d45269a0ad3ac6c.jpg');
INSERT INTO `moshm` VALUES ('6', '麦仕 雪纳瑞多肉无谷全期粮 1.5kg', '95.40', '106.00', '../src/assets/img/navList/dbcc5f1a15dec9fa4ada06619e379287.jpg');
INSERT INTO `moshm` VALUES ('7', '麦仕 比熊犬多肉无谷全期粮 1.5kg', '95.40', '106.00', '../src/assets/img/navList/d0770ac11247d6dc2cd26ebab21530ea.jpg');

-- ----------------------------
-- Table structure for naturebridge
-- ----------------------------
DROP TABLE IF EXISTS `naturebridge`;
CREATE TABLE `naturebridge` (
  `goodsid` int(50) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '0',
  `curprice` int(50) NOT NULL DEFAULT '0',
  `oriprice` int(50) NOT NULL DEFAULT '0',
  `imgurl` varchar(255) NOT NULL DEFAULT '0',
  PRIMARY KEY (`goodsid`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of naturebridge
-- ----------------------------
INSERT INTO `naturebridge` VALUES ('1', '比瑞吉 益生元幼犬奶糕罐头 156g', '15', '17', '../src/assets/img/navList/nature1.jpg');
INSERT INTO `naturebridge` VALUES ('2', '比瑞吉 健康型天然粮 泰迪贵宾全价成犬粮 2kg', '99', '125', '../src/assets/img/navList/8c9ad8c875310f1404e76a0025cc495f.jpg');
INSERT INTO `naturebridge` VALUES ('3', '比瑞吉 健康型天然粮 泰迪贵宾幼犬粮 2kg', '119', '142', '../src/assets/img/navList/455b24b8c894656e9bd2478903c442f8.jpg');
INSERT INTO `naturebridge` VALUES ('4', '比瑞吉 健康型天然粮 室内小型犬全价成犬粮 2kg', '109', '89', '../src/assets/img/navList/740630eb4e1a06ab8a159ef6f080fea6.jpg');
INSERT INTO `naturebridge` VALUES ('5', '比瑞吉 健康型天然粮 小型犬全价成犬粮 1.5kg', '82', '69', '../src/assets/img/navList/3a7e2da47ed538314ba06c6d852933d2.jpg');
INSERT INTO `naturebridge` VALUES ('6', '比瑞吉 俱乐部全犬种全价幼犬粮 2kg', '75', '65', '../src/assets/img/navList/e23f27adf110fa398c364eba766c7762.jpg');
INSERT INTO `naturebridge` VALUES ('7', '比瑞吉俱乐部 天然健康膳食配方 成犬粮 1.6kg', '54', '45', '../src/assets/img/navList/78f6a72b1d03b22afd0cf5c71c931d31.jpg');
INSERT INTO `naturebridge` VALUES ('8', '比瑞吉俱乐部 天然健康膳食配方 成犬粮 10kg', '242', '199', '../src/assets/img/navList/9272bd9089892ee4157f1f8977d34463.jpg');

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `orderId` varchar(255) NOT NULL COMMENT '订单id',
  `userId` int(255) DEFAULT NULL COMMENT '用户id',
  `status` varchar(255) DEFAULT '0' COMMENT '订单状态：0，待付款；1，待收货；2，待评价；3，已完成；4，已取消',
  `time` datetime DEFAULT CURRENT_TIMESTAMP,
  `leavewords` varchar(255) DEFAULT NULL COMMENT '买家留言',
  PRIMARY KEY (`orderId`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES ('1518071926000', '42', '0', '2018-02-08 14:40:28', null);
INSERT INTO `order` VALUES ('1518072021000', '42', '0', '2018-02-08 14:42:03', null);
INSERT INTO `order` VALUES ('1', '2', '1', '2018-02-05 12:11:13', null);
INSERT INTO `order` VALUES ('2', '2', '2', '2018-02-05 12:11:15', null);
INSERT INTO `order` VALUES ('3', '42', '1', '2018-02-07 11:35:00', null);
INSERT INTO `order` VALUES ('4', '2', '3', '2018-02-08 13:19:31', null);
INSERT INTO `order` VALUES ('5', '2', '3', '2018-02-08 13:20:50', null);
INSERT INTO `order` VALUES ('1518071194000', '42', '0', '2018-02-08 14:28:17', null);
INSERT INTO `order` VALUES ('1518071347000', '42', '0', '2018-02-08 14:30:50', null);
INSERT INTO `order` VALUES ('1518071518000', '42', '0', '2018-02-08 14:33:41', null);
INSERT INTO `order` VALUES ('1518071560000', '42', '0', '2018-02-08 14:34:23', null);
INSERT INTO `order` VALUES ('1518071629000', '42', '0', '2018-02-08 14:35:31', null);
INSERT INTO `order` VALUES ('1518071667000', '42', '0', '2018-02-08 14:36:09', null);
INSERT INTO `order` VALUES ('1518071733000', '42', '0', '2018-02-08 14:37:15', null);
INSERT INTO `order` VALUES ('1518071813000', '42', '0', '2018-02-08 14:38:35', null);
INSERT INTO `order` VALUES ('1518071843000', '42', '0', '2018-02-08 14:39:06', null);
INSERT INTO `order` VALUES ('1518071881000', '42', '0', '2018-02-08 14:39:44', null);
INSERT INTO `order` VALUES ('1518072086000', '42', '0', '2018-02-08 14:43:09', null);
INSERT INTO `order` VALUES ('1518072117000', '42', '0', '2018-02-08 14:43:40', null);
INSERT INTO `order` VALUES ('1518072139000', '42', '0', '2018-02-08 14:44:01', null);
INSERT INTO `order` VALUES ('1518072190000', '42', '0', '2018-02-08 14:44:52', null);
INSERT INTO `order` VALUES ('1518072211000', '42', '0', '2018-02-08 14:45:13', null);
INSERT INTO `order` VALUES ('1518072234000', '42', '0', '2018-02-08 14:45:37', null);
INSERT INTO `order` VALUES ('1518073174000', '42', '0', '2018-02-08 15:01:17', null);
INSERT INTO `order` VALUES ('1518073291000', '42', '0', '2018-02-08 15:03:13', null);
INSERT INTO `order` VALUES ('1518093096000', '42', '0', '2018-02-08 20:33:19', null);
INSERT INTO `order` VALUES ('1518092959000', '42', '0', '2018-02-08 20:31:01', null);
INSERT INTO `order` VALUES ('1518092560000', '42', '0', '2018-02-08 20:24:23', null);
INSERT INTO `order` VALUES ('1518091409000', '42', '0', '2018-02-08 20:05:12', null);
INSERT INTO `order` VALUES ('1518091005000', '42', '0', '2018-02-08 19:58:28', null);
INSERT INTO `order` VALUES ('1518087235000', '42', '0', '2018-02-08 18:55:37', null);
INSERT INTO `order` VALUES ('1518087295000', '42', '0', '2018-02-08 18:56:37', null);
INSERT INTO `order` VALUES ('1518158108000', '48', '1', '2018-02-09 14:37:11', null);
INSERT INTO `order` VALUES ('1518158026000', '48', '0', '2018-02-09 14:35:49', null);
INSERT INTO `order` VALUES ('1518157209000', '50', '1', '2018-02-09 14:20:52', null);
INSERT INTO `order` VALUES ('1518156880000', '48', '1', '2018-02-09 14:16:42', null);
INSERT INTO `order` VALUES ('1518156760000', '49', '1', '2018-02-09 14:14:58', null);
INSERT INTO `order` VALUES ('1518154582000', '47', '1', '2018-02-09 13:36:22', null);
INSERT INTO `order` VALUES ('1518154539000', '47', '0', '2018-02-09 13:35:39', null);
INSERT INTO `order` VALUES ('1518151061000', '47', '1', '2018-02-09 12:37:41', null);
INSERT INTO `order` VALUES ('1518150414000', '47', '1', '2018-02-09 12:28:57', null);
INSERT INTO `order` VALUES ('1518145312000', '43', '1', '2018-02-09 11:01:24', null);

-- ----------------------------
-- Table structure for ordergoods
-- ----------------------------
DROP TABLE IF EXISTS `ordergoods`;
CREATE TABLE `ordergoods` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `orderId` varchar(255) NOT NULL,
  `goodId` int(100) NOT NULL,
  `time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=613 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ordergoods
-- ----------------------------
INSERT INTO `ordergoods` VALUES ('1', '1', '1', '2018-01-20 10:13:38');
INSERT INTO `ordergoods` VALUES ('42', '1516949215302', '3', '2018-01-26 14:45:06');
INSERT INTO `ordergoods` VALUES ('3', '1', '3', '2018-01-20 10:14:09');
INSERT INTO `ordergoods` VALUES ('4', '3', '4', '2018-01-20 11:08:42');
INSERT INTO `ordergoods` VALUES ('5', '4', '5', '2018-01-20 15:12:01');
INSERT INTO `ordergoods` VALUES ('6', '5', '6', '2018-01-20 17:30:22');
INSERT INTO `ordergoods` VALUES ('7', '5', '1', '2018-01-20 17:41:13');
INSERT INTO `ordergoods` VALUES ('8', '1', '2', '2018-01-20 17:43:50');
INSERT INTO `ordergoods` VALUES ('57', '1516958403943', '7', '2018-01-26 17:20:22');
INSERT INTO `ordergoods` VALUES ('11', '8', '8', '2018-01-22 18:27:16');
INSERT INTO `ordergoods` VALUES ('12', '2', '3', '2018-01-23 15:55:42');
INSERT INTO `ordergoods` VALUES ('9', '9', '2', '2018-01-23 17:18:21');
INSERT INTO `ordergoods` VALUES ('13', '9', '1', '2018-01-23 17:40:31');
INSERT INTO `ordergoods` VALUES ('31', '1516930927672', '9', '2018-01-26 09:42:07');
INSERT INTO `ordergoods` VALUES ('30', '1516879546938', '9', '2018-01-25 19:23:57');
INSERT INTO `ordergoods` VALUES ('29', '1516879529380', '13', '2018-01-25 19:23:40');
INSERT INTO `ordergoods` VALUES ('27', '1516868918882', '2', '2018-01-25 16:26:50');
INSERT INTO `ordergoods` VALUES ('23', '1516867157625', '4', '2018-01-25 15:57:29');
INSERT INTO `ordergoods` VALUES ('28', '1516870183003', '13', '2018-01-25 16:47:55');
INSERT INTO `ordergoods` VALUES ('25', '1516868240529', '11', '2018-01-25 16:15:32');
INSERT INTO `ordergoods` VALUES ('26', '1516868473649', '4', '2018-01-25 16:19:25');
INSERT INTO `ordergoods` VALUES ('41', '1516947453185', '2', '2018-01-26 14:15:44');
INSERT INTO `ordergoods` VALUES ('56', '1516958153085', '4', '2018-01-26 17:14:03');
INSERT INTO `ordergoods` VALUES ('45', '1516950858204', '4', '2018-01-26 15:12:24');
INSERT INTO `ordergoods` VALUES ('54', '1516958153085', '2', '2018-01-26 17:14:03');
INSERT INTO `ordergoods` VALUES ('47', '1516952377002', '13', '2018-01-26 15:37:47');
INSERT INTO `ordergoods` VALUES ('43', '1516949215302', '4', '2018-01-26 14:45:06');
INSERT INTO `ordergoods` VALUES ('44', '1516949215302', '7', '2018-01-26 14:45:07');
INSERT INTO `ordergoods` VALUES ('55', '1516958153085', '3', '2018-01-26 17:14:03');
INSERT INTO `ordergoods` VALUES ('58', '1516966842809', '8', '2018-01-26 19:38:54');
INSERT INTO `ordergoods` VALUES ('59', '1517036054854', '2', '2018-01-27 14:52:26');
INSERT INTO `ordergoods` VALUES ('60', '1516870196681', '9', '2018-01-27 16:22:26');
INSERT INTO `ordergoods` VALUES ('61', '1517191184783', '2', '2018-01-29 10:00:06');
INSERT INTO `ordergoods` VALUES ('62', '1517192436719', '2', '2018-01-29 10:18:46');
INSERT INTO `ordergoods` VALUES ('63', '1517192436719', '3', '2018-01-29 10:18:46');
INSERT INTO `ordergoods` VALUES ('79', '1518072211000', '1', '2018-02-08 14:45:13');
INSERT INTO `ordergoods` VALUES ('78', '1518072190000', '1', '2018-02-08 14:44:52');
INSERT INTO `ordergoods` VALUES ('77', '1518072190000', '1', '2018-02-08 14:44:52');
INSERT INTO `ordergoods` VALUES ('76', '1518072021000', '0', '2018-02-08 14:42:03');
INSERT INTO `ordergoods` VALUES ('75', '1518072021000', '0', '2018-02-08 14:42:03');
INSERT INTO `ordergoods` VALUES ('80', '1518072211000', '1', '2018-02-08 14:45:13');
INSERT INTO `ordergoods` VALUES ('81', '1518072234000', '1', '2018-02-08 14:45:37');
INSERT INTO `ordergoods` VALUES ('82', '1518072234000', '1', '2018-02-08 14:45:37');
INSERT INTO `ordergoods` VALUES ('83', '1518073174000', '2', '2018-02-08 15:01:17');
INSERT INTO `ordergoods` VALUES ('84', '1518073174000', '2', '2018-02-08 15:01:17');
INSERT INTO `ordergoods` VALUES ('85', '1518073174000', '2', '2018-02-08 15:01:17');
INSERT INTO `ordergoods` VALUES ('86', '1518073174000', '2', '2018-02-08 15:01:17');
INSERT INTO `ordergoods` VALUES ('87', '1518073174000', '2', '2018-02-08 15:01:17');
INSERT INTO `ordergoods` VALUES ('88', '1518073174000', '2', '2018-02-08 15:01:17');
INSERT INTO `ordergoods` VALUES ('89', '1518073174000', '2', '2018-02-08 15:01:17');
INSERT INTO `ordergoods` VALUES ('90', '1518073174000', '1', '2018-02-08 15:01:17');
INSERT INTO `ordergoods` VALUES ('91', '1518073174000', '1', '2018-02-08 15:01:17');
INSERT INTO `ordergoods` VALUES ('92', '1518073291000', '2', '2018-02-08 15:03:13');
INSERT INTO `ordergoods` VALUES ('93', '1518073291000', '2', '2018-02-08 15:03:13');
INSERT INTO `ordergoods` VALUES ('94', '1518073291000', '2', '2018-02-08 15:03:13');
INSERT INTO `ordergoods` VALUES ('95', '1518073291000', '2', '2018-02-08 15:03:13');
INSERT INTO `ordergoods` VALUES ('96', '1518073291000', '2', '2018-02-08 15:03:13');
INSERT INTO `ordergoods` VALUES ('97', '1518073291000', '2', '2018-02-08 15:03:13');
INSERT INTO `ordergoods` VALUES ('98', '1518073291000', '2', '2018-02-08 15:03:13');
INSERT INTO `ordergoods` VALUES ('99', '1518073291000', '1', '2018-02-08 15:03:13');
INSERT INTO `ordergoods` VALUES ('100', '1518073291000', '1', '2018-02-08 15:03:13');
INSERT INTO `ordergoods` VALUES ('101', '1518073817000', '1', '2018-02-08 15:12:00');
INSERT INTO `ordergoods` VALUES ('102', '1518073817000', '1', '2018-02-08 15:12:00');
INSERT INTO `ordergoods` VALUES ('126', '1518091005000', '16', '2018-02-08 19:58:28');
INSERT INTO `ordergoods` VALUES ('105', '1518074315000', '1', '2018-02-08 15:20:17');
INSERT INTO `ordergoods` VALUES ('106', '1518074315000', '1', '2018-02-08 15:20:17');
INSERT INTO `ordergoods` VALUES ('132', '1518091409000', '14', '2018-02-08 20:05:12');
INSERT INTO `ordergoods` VALUES ('129', '1518091409000', '14', '2018-02-08 20:05:12');
INSERT INTO `ordergoods` VALUES ('130', '1518091409000', '14', '2018-02-08 20:05:12');
INSERT INTO `ordergoods` VALUES ('131', '1518091409000', '14', '2018-02-08 20:05:12');
INSERT INTO `ordergoods` VALUES ('113', '1518087235000', '2', '2018-02-08 18:55:37');
INSERT INTO `ordergoods` VALUES ('127', '1518091409000', '14', '2018-02-08 20:05:12');
INSERT INTO `ordergoods` VALUES ('125', '1518091005000', '9', '2018-02-08 19:58:28');
INSERT INTO `ordergoods` VALUES ('116', '1518087295000', '9', '2018-02-08 18:56:37');
INSERT INTO `ordergoods` VALUES ('117', '1518087461000', '9', '2018-02-08 18:59:23');
INSERT INTO `ordergoods` VALUES ('118', '1518087495000', '9', '2018-02-08 18:59:58');
INSERT INTO `ordergoods` VALUES ('133', '1518092560000', '14', '2018-02-08 20:24:23');
INSERT INTO `ordergoods` VALUES ('120', '1518087551000', '2', '2018-02-08 19:00:54');
INSERT INTO `ordergoods` VALUES ('121', '1518088032000', '9', '2018-02-08 19:08:54');
INSERT INTO `ordergoods` VALUES ('122', '1518088122000', '9', '2018-02-08 19:10:24');
INSERT INTO `ordergoods` VALUES ('123', '1518088351000', '9', '2018-02-08 19:14:14');
INSERT INTO `ordergoods` VALUES ('128', '1518091409000', '14', '2018-02-08 20:05:12');
INSERT INTO `ordergoods` VALUES ('134', '1518092560000', '14', '2018-02-08 20:24:23');
INSERT INTO `ordergoods` VALUES ('135', '1518092560000', '14', '2018-02-08 20:24:23');
INSERT INTO `ordergoods` VALUES ('136', '1518092959000', '9', '2018-02-08 20:31:01');
INSERT INTO `ordergoods` VALUES ('137', '1518093096000', '9', '2018-02-08 20:33:19');
INSERT INTO `ordergoods` VALUES ('138', '1518093115000', '9', '2018-02-08 20:33:38');
INSERT INTO `ordergoods` VALUES ('139', '1518093115000', '9', '2018-02-08 20:33:38');
INSERT INTO `ordergoods` VALUES ('140', '1518093115000', '9', '2018-02-08 20:33:38');
INSERT INTO `ordergoods` VALUES ('141', '1518093115000', '9', '2018-02-08 20:33:38');
INSERT INTO `ordergoods` VALUES ('142', '1518093537000', '3', '2018-02-08 20:38:30');
INSERT INTO `ordergoods` VALUES ('143', '1518093537000', '3', '2018-02-08 20:38:30');
INSERT INTO `ordergoods` VALUES ('144', '1518093537000', '3', '2018-02-08 20:38:30');
INSERT INTO `ordergoods` VALUES ('145', '1518093537000', '3', '2018-02-08 20:38:30');
INSERT INTO `ordergoods` VALUES ('146', '1518093537000', '11', '2018-02-08 20:38:30');
INSERT INTO `ordergoods` VALUES ('147', '1518093537000', '11', '2018-02-08 20:38:31');
INSERT INTO `ordergoods` VALUES ('148', '1518093537000', '11', '2018-02-08 20:38:31');
INSERT INTO `ordergoods` VALUES ('149', '1518093726000', '3', '2018-02-08 20:41:40');
INSERT INTO `ordergoods` VALUES ('150', '1518093726000', '3', '2018-02-08 20:41:40');
INSERT INTO `ordergoods` VALUES ('151', '1518093726000', '3', '2018-02-08 20:41:40');
INSERT INTO `ordergoods` VALUES ('152', '1518093726000', '3', '2018-02-08 20:41:40');
INSERT INTO `ordergoods` VALUES ('153', '1518093726000', '11', '2018-02-08 20:41:40');
INSERT INTO `ordergoods` VALUES ('154', '1518093726000', '11', '2018-02-08 20:41:40');
INSERT INTO `ordergoods` VALUES ('155', '1518093726000', '11', '2018-02-08 20:41:40');
INSERT INTO `ordergoods` VALUES ('156', '1518093741000', '3', '2018-02-08 20:41:55');
INSERT INTO `ordergoods` VALUES ('157', '1518093741000', '3', '2018-02-08 20:41:55');
INSERT INTO `ordergoods` VALUES ('158', '1518093741000', '3', '2018-02-08 20:41:55');
INSERT INTO `ordergoods` VALUES ('159', '1518093741000', '3', '2018-02-08 20:41:55');
INSERT INTO `ordergoods` VALUES ('160', '1518093741000', '3', '2018-02-08 20:41:55');
INSERT INTO `ordergoods` VALUES ('161', '1518093741000', '11', '2018-02-08 20:41:55');
INSERT INTO `ordergoods` VALUES ('162', '1518093741000', '11', '2018-02-08 20:41:55');
INSERT INTO `ordergoods` VALUES ('163', '1518093741000', '11', '2018-02-08 20:41:55');
INSERT INTO `ordergoods` VALUES ('164', '1518093764000', '3', '2018-02-08 20:42:18');
INSERT INTO `ordergoods` VALUES ('165', '1518093764000', '3', '2018-02-08 20:42:18');
INSERT INTO `ordergoods` VALUES ('166', '1518093764000', '3', '2018-02-08 20:42:18');
INSERT INTO `ordergoods` VALUES ('167', '1518093764000', '3', '2018-02-08 20:42:18');
INSERT INTO `ordergoods` VALUES ('168', '1518093764000', '3', '2018-02-08 20:42:18');
INSERT INTO `ordergoods` VALUES ('169', '1518093764000', '11', '2018-02-08 20:42:18');
INSERT INTO `ordergoods` VALUES ('170', '1518093764000', '11', '2018-02-08 20:42:18');
INSERT INTO `ordergoods` VALUES ('171', '1518093764000', '11', '2018-02-08 20:42:18');
INSERT INTO `ordergoods` VALUES ('172', '1518094215000', '3', '2018-02-08 20:49:49');
INSERT INTO `ordergoods` VALUES ('173', '1518094215000', '3', '2018-02-08 20:49:49');
INSERT INTO `ordergoods` VALUES ('174', '1518094215000', '3', '2018-02-08 20:49:49');
INSERT INTO `ordergoods` VALUES ('175', '1518094215000', '3', '2018-02-08 20:49:49');
INSERT INTO `ordergoods` VALUES ('176', '1518094215000', '3', '2018-02-08 20:49:49');
INSERT INTO `ordergoods` VALUES ('177', '1518094215000', '4', '2018-02-08 20:49:49');
INSERT INTO `ordergoods` VALUES ('178', '1518094215000', '4', '2018-02-08 20:49:49');
INSERT INTO `ordergoods` VALUES ('179', '1518094215000', '11', '2018-02-08 20:49:49');
INSERT INTO `ordergoods` VALUES ('180', '1518094215000', '11', '2018-02-08 20:49:49');
INSERT INTO `ordergoods` VALUES ('181', '1518094215000', '11', '2018-02-08 20:49:49');
INSERT INTO `ordergoods` VALUES ('182', '1518094416000', '3', '2018-02-08 20:53:09');
INSERT INTO `ordergoods` VALUES ('183', '1518094416000', '3', '2018-02-08 20:53:09');
INSERT INTO `ordergoods` VALUES ('184', '1518094416000', '3', '2018-02-08 20:53:09');
INSERT INTO `ordergoods` VALUES ('185', '1518094416000', '3', '2018-02-08 20:53:10');
INSERT INTO `ordergoods` VALUES ('186', '1518094416000', '3', '2018-02-08 20:53:10');
INSERT INTO `ordergoods` VALUES ('187', '1518094416000', '4', '2018-02-08 20:53:10');
INSERT INTO `ordergoods` VALUES ('188', '1518094416000', '4', '2018-02-08 20:53:10');
INSERT INTO `ordergoods` VALUES ('189', '1518094416000', '11', '2018-02-08 20:53:10');
INSERT INTO `ordergoods` VALUES ('190', '1518094416000', '11', '2018-02-08 20:53:10');
INSERT INTO `ordergoods` VALUES ('191', '1518094416000', '11', '2018-02-08 20:53:10');
INSERT INTO `ordergoods` VALUES ('192', '1518094517000', '3', '2018-02-08 20:54:51');
INSERT INTO `ordergoods` VALUES ('193', '1518094517000', '3', '2018-02-08 20:54:51');
INSERT INTO `ordergoods` VALUES ('194', '1518094517000', '3', '2018-02-08 20:54:51');
INSERT INTO `ordergoods` VALUES ('195', '1518094517000', '3', '2018-02-08 20:54:51');
INSERT INTO `ordergoods` VALUES ('196', '1518094517000', '3', '2018-02-08 20:54:51');
INSERT INTO `ordergoods` VALUES ('197', '1518094517000', '4', '2018-02-08 20:54:51');
INSERT INTO `ordergoods` VALUES ('198', '1518094517000', '4', '2018-02-08 20:54:51');
INSERT INTO `ordergoods` VALUES ('199', '1518094517000', '11', '2018-02-08 20:54:51');
INSERT INTO `ordergoods` VALUES ('200', '1518094517000', '11', '2018-02-08 20:54:51');
INSERT INTO `ordergoods` VALUES ('201', '1518094517000', '11', '2018-02-08 20:54:51');
INSERT INTO `ordergoods` VALUES ('202', '1518094655000', '3', '2018-02-08 20:57:09');
INSERT INTO `ordergoods` VALUES ('203', '1518094655000', '3', '2018-02-08 20:57:09');
INSERT INTO `ordergoods` VALUES ('204', '1518094655000', '3', '2018-02-08 20:57:09');
INSERT INTO `ordergoods` VALUES ('205', '1518094655000', '3', '2018-02-08 20:57:09');
INSERT INTO `ordergoods` VALUES ('206', '1518094655000', '3', '2018-02-08 20:57:09');
INSERT INTO `ordergoods` VALUES ('207', '1518094655000', '4', '2018-02-08 20:57:09');
INSERT INTO `ordergoods` VALUES ('208', '1518094655000', '4', '2018-02-08 20:57:09');
INSERT INTO `ordergoods` VALUES ('209', '1518094655000', '11', '2018-02-08 20:57:09');
INSERT INTO `ordergoods` VALUES ('210', '1518094655000', '11', '2018-02-08 20:57:09');
INSERT INTO `ordergoods` VALUES ('211', '1518094655000', '11', '2018-02-08 20:57:09');
INSERT INTO `ordergoods` VALUES ('212', '1518094908000', '3', '2018-02-08 21:01:22');
INSERT INTO `ordergoods` VALUES ('213', '1518094908000', '3', '2018-02-08 21:01:22');
INSERT INTO `ordergoods` VALUES ('214', '1518094908000', '3', '2018-02-08 21:01:22');
INSERT INTO `ordergoods` VALUES ('215', '1518094908000', '3', '2018-02-08 21:01:22');
INSERT INTO `ordergoods` VALUES ('216', '1518094908000', '3', '2018-02-08 21:01:22');
INSERT INTO `ordergoods` VALUES ('217', '1518094908000', '4', '2018-02-08 21:01:22');
INSERT INTO `ordergoods` VALUES ('218', '1518094908000', '4', '2018-02-08 21:01:22');
INSERT INTO `ordergoods` VALUES ('219', '1518094908000', '11', '2018-02-08 21:01:22');
INSERT INTO `ordergoods` VALUES ('220', '1518094908000', '11', '2018-02-08 21:01:22');
INSERT INTO `ordergoods` VALUES ('221', '1518094908000', '11', '2018-02-08 21:01:22');
INSERT INTO `ordergoods` VALUES ('222', '1518094931000', '9', '2018-02-08 21:03:54');
INSERT INTO `ordergoods` VALUES ('223', '1518094931000', '9', '2018-02-08 21:03:54');
INSERT INTO `ordergoods` VALUES ('224', '1518094931000', '9', '2018-02-08 21:03:54');
INSERT INTO `ordergoods` VALUES ('225', '1518094931000', '9', '2018-02-08 21:03:54');
INSERT INTO `ordergoods` VALUES ('226', '1518094931000', '9', '2018-02-08 21:03:54');
INSERT INTO `ordergoods` VALUES ('227', '1518095000000', '9', '2018-02-08 21:05:02');
INSERT INTO `ordergoods` VALUES ('228', '1518095000000', '9', '2018-02-08 21:05:02');
INSERT INTO `ordergoods` VALUES ('229', '1518095000000', '9', '2018-02-08 21:05:02');
INSERT INTO `ordergoods` VALUES ('230', '1518095000000', '9', '2018-02-08 21:05:02');
INSERT INTO `ordergoods` VALUES ('231', '1518095000000', '9', '2018-02-08 21:05:02');
INSERT INTO `ordergoods` VALUES ('232', '1518095000000', '9', '2018-02-08 21:05:02');
INSERT INTO `ordergoods` VALUES ('233', '1518095000000', '9', '2018-02-08 21:05:02');
INSERT INTO `ordergoods` VALUES ('234', '1518095000000', '9', '2018-02-08 21:05:02');
INSERT INTO `ordergoods` VALUES ('235', '1518095000000', '9', '2018-02-08 21:05:02');
INSERT INTO `ordergoods` VALUES ('236', '1518095000000', '9', '2018-02-08 21:05:02');
INSERT INTO `ordergoods` VALUES ('237', '1518095000000', '9', '2018-02-08 21:05:02');
INSERT INTO `ordergoods` VALUES ('238', '1518095000000', '9', '2018-02-08 21:05:02');
INSERT INTO `ordergoods` VALUES ('239', '1518095000000', '14', '2018-02-08 21:05:02');
INSERT INTO `ordergoods` VALUES ('240', '1518095000000', '14', '2018-02-08 21:05:02');
INSERT INTO `ordergoods` VALUES ('241', '1518095000000', '14', '2018-02-08 21:05:02');
INSERT INTO `ordergoods` VALUES ('242', '1518095000000', '14', '2018-02-08 21:05:02');
INSERT INTO `ordergoods` VALUES ('243', '1518139462000', '3', '2018-02-09 09:23:55');
INSERT INTO `ordergoods` VALUES ('244', '1518139462000', '3', '2018-02-09 09:23:55');
INSERT INTO `ordergoods` VALUES ('245', '1518139462000', '3', '2018-02-09 09:23:55');
INSERT INTO `ordergoods` VALUES ('246', '1518139462000', '3', '2018-02-09 09:23:55');
INSERT INTO `ordergoods` VALUES ('247', '1518139462000', '3', '2018-02-09 09:23:55');
INSERT INTO `ordergoods` VALUES ('248', '1518139462000', '4', '2018-02-09 09:23:55');
INSERT INTO `ordergoods` VALUES ('249', '1518139462000', '4', '2018-02-09 09:23:55');
INSERT INTO `ordergoods` VALUES ('250', '1518139462000', '8', '2018-02-09 09:23:55');
INSERT INTO `ordergoods` VALUES ('251', '1518139462000', '11', '2018-02-09 09:23:55');
INSERT INTO `ordergoods` VALUES ('252', '1518139462000', '11', '2018-02-09 09:23:55');
INSERT INTO `ordergoods` VALUES ('253', '1518139462000', '11', '2018-02-09 09:23:55');
INSERT INTO `ordergoods` VALUES ('254', '1518139462000', '14', '2018-02-09 09:23:55');
INSERT INTO `ordergoods` VALUES ('255', '1518139462000', '14', '2018-02-09 09:23:55');
INSERT INTO `ordergoods` VALUES ('256', '1518139462000', '14', '2018-02-09 09:23:55');
INSERT INTO `ordergoods` VALUES ('257', '1518139462000', '14', '2018-02-09 09:23:55');
INSERT INTO `ordergoods` VALUES ('258', '1518139462000', '14', '2018-02-09 09:23:55');
INSERT INTO `ordergoods` VALUES ('259', '1518139462000', '14', '2018-02-09 09:23:55');
INSERT INTO `ordergoods` VALUES ('260', '1518139462000', '14', '2018-02-09 09:23:55');
INSERT INTO `ordergoods` VALUES ('261', '1518139462000', '14', '2018-02-09 09:23:55');
INSERT INTO `ordergoods` VALUES ('262', '1518139548000', '3', '2018-02-09 09:25:21');
INSERT INTO `ordergoods` VALUES ('263', '1518139548000', '3', '2018-02-09 09:25:21');
INSERT INTO `ordergoods` VALUES ('264', '1518139548000', '3', '2018-02-09 09:25:21');
INSERT INTO `ordergoods` VALUES ('265', '1518139548000', '3', '2018-02-09 09:25:21');
INSERT INTO `ordergoods` VALUES ('266', '1518139548000', '3', '2018-02-09 09:25:21');
INSERT INTO `ordergoods` VALUES ('267', '1518139548000', '4', '2018-02-09 09:25:21');
INSERT INTO `ordergoods` VALUES ('268', '1518139548000', '4', '2018-02-09 09:25:21');
INSERT INTO `ordergoods` VALUES ('269', '1518139548000', '8', '2018-02-09 09:25:21');
INSERT INTO `ordergoods` VALUES ('270', '1518139548000', '11', '2018-02-09 09:25:21');
INSERT INTO `ordergoods` VALUES ('271', '1518139548000', '11', '2018-02-09 09:25:21');
INSERT INTO `ordergoods` VALUES ('272', '1518139548000', '11', '2018-02-09 09:25:21');
INSERT INTO `ordergoods` VALUES ('273', '1518139548000', '14', '2018-02-09 09:25:21');
INSERT INTO `ordergoods` VALUES ('274', '1518139548000', '14', '2018-02-09 09:25:21');
INSERT INTO `ordergoods` VALUES ('275', '1518139548000', '14', '2018-02-09 09:25:21');
INSERT INTO `ordergoods` VALUES ('276', '1518139548000', '14', '2018-02-09 09:25:21');
INSERT INTO `ordergoods` VALUES ('277', '1518139548000', '14', '2018-02-09 09:25:21');
INSERT INTO `ordergoods` VALUES ('278', '1518139548000', '14', '2018-02-09 09:25:21');
INSERT INTO `ordergoods` VALUES ('279', '1518139548000', '14', '2018-02-09 09:25:21');
INSERT INTO `ordergoods` VALUES ('280', '1518139548000', '14', '2018-02-09 09:25:21');
INSERT INTO `ordergoods` VALUES ('281', '1518139548000', '14', '2018-02-09 09:25:21');
INSERT INTO `ordergoods` VALUES ('282', '1518139586000', '3', '2018-02-09 09:25:59');
INSERT INTO `ordergoods` VALUES ('283', '1518139586000', '3', '2018-02-09 09:25:59');
INSERT INTO `ordergoods` VALUES ('284', '1518139586000', '3', '2018-02-09 09:25:59');
INSERT INTO `ordergoods` VALUES ('285', '1518139586000', '3', '2018-02-09 09:25:59');
INSERT INTO `ordergoods` VALUES ('286', '1518139586000', '3', '2018-02-09 09:25:59');
INSERT INTO `ordergoods` VALUES ('287', '1518139586000', '4', '2018-02-09 09:25:59');
INSERT INTO `ordergoods` VALUES ('288', '1518139586000', '4', '2018-02-09 09:25:59');
INSERT INTO `ordergoods` VALUES ('289', '1518139586000', '8', '2018-02-09 09:25:59');
INSERT INTO `ordergoods` VALUES ('290', '1518139586000', '11', '2018-02-09 09:25:59');
INSERT INTO `ordergoods` VALUES ('291', '1518139586000', '11', '2018-02-09 09:25:59');
INSERT INTO `ordergoods` VALUES ('292', '1518139586000', '11', '2018-02-09 09:25:59');
INSERT INTO `ordergoods` VALUES ('293', '1518139586000', '14', '2018-02-09 09:25:59');
INSERT INTO `ordergoods` VALUES ('294', '1518139586000', '14', '2018-02-09 09:25:59');
INSERT INTO `ordergoods` VALUES ('295', '1518139586000', '14', '2018-02-09 09:25:59');
INSERT INTO `ordergoods` VALUES ('296', '1518139586000', '14', '2018-02-09 09:25:59');
INSERT INTO `ordergoods` VALUES ('297', '1518139586000', '14', '2018-02-09 09:25:59');
INSERT INTO `ordergoods` VALUES ('298', '1518139586000', '14', '2018-02-09 09:25:59');
INSERT INTO `ordergoods` VALUES ('299', '1518139586000', '14', '2018-02-09 09:25:59');
INSERT INTO `ordergoods` VALUES ('300', '1518139586000', '14', '2018-02-09 09:25:59');
INSERT INTO `ordergoods` VALUES ('301', '1518139586000', '14', '2018-02-09 09:25:59');
INSERT INTO `ordergoods` VALUES ('302', '1518140061000', '3', '2018-02-09 09:33:55');
INSERT INTO `ordergoods` VALUES ('303', '1518140061000', '3', '2018-02-09 09:33:55');
INSERT INTO `ordergoods` VALUES ('304', '1518140061000', '3', '2018-02-09 09:33:55');
INSERT INTO `ordergoods` VALUES ('305', '1518140061000', '3', '2018-02-09 09:33:55');
INSERT INTO `ordergoods` VALUES ('306', '1518140061000', '3', '2018-02-09 09:33:55');
INSERT INTO `ordergoods` VALUES ('307', '1518140061000', '4', '2018-02-09 09:33:55');
INSERT INTO `ordergoods` VALUES ('308', '1518140061000', '4', '2018-02-09 09:33:55');
INSERT INTO `ordergoods` VALUES ('309', '1518140061000', '8', '2018-02-09 09:33:55');
INSERT INTO `ordergoods` VALUES ('310', '1518140061000', '11', '2018-02-09 09:33:55');
INSERT INTO `ordergoods` VALUES ('311', '1518140061000', '11', '2018-02-09 09:33:55');
INSERT INTO `ordergoods` VALUES ('312', '1518140061000', '11', '2018-02-09 09:33:55');
INSERT INTO `ordergoods` VALUES ('313', '1518140061000', '14', '2018-02-09 09:33:55');
INSERT INTO `ordergoods` VALUES ('314', '1518140061000', '14', '2018-02-09 09:33:55');
INSERT INTO `ordergoods` VALUES ('315', '1518140061000', '14', '2018-02-09 09:33:55');
INSERT INTO `ordergoods` VALUES ('316', '1518140061000', '14', '2018-02-09 09:33:55');
INSERT INTO `ordergoods` VALUES ('317', '1518140061000', '14', '2018-02-09 09:33:55');
INSERT INTO `ordergoods` VALUES ('318', '1518140061000', '14', '2018-02-09 09:33:55');
INSERT INTO `ordergoods` VALUES ('319', '1518140061000', '14', '2018-02-09 09:33:55');
INSERT INTO `ordergoods` VALUES ('320', '1518140061000', '14', '2018-02-09 09:33:55');
INSERT INTO `ordergoods` VALUES ('321', '1518140061000', '14', '2018-02-09 09:33:55');
INSERT INTO `ordergoods` VALUES ('322', '1518140061000', '14', '2018-02-09 09:33:55');
INSERT INTO `ordergoods` VALUES ('323', '1518140061000', '14', '2018-02-09 09:33:55');
INSERT INTO `ordergoods` VALUES ('324', '1518140061000', '14', '2018-02-09 09:33:55');
INSERT INTO `ordergoods` VALUES ('325', '1518140061000', '14', '2018-02-09 09:33:55');
INSERT INTO `ordergoods` VALUES ('326', '1518140061000', '14', '2018-02-09 09:33:55');
INSERT INTO `ordergoods` VALUES ('327', '1518140061000', '14', '2018-02-09 09:33:55');
INSERT INTO `ordergoods` VALUES ('328', '1518140197000', '3', '2018-02-09 09:36:10');
INSERT INTO `ordergoods` VALUES ('329', '1518140197000', '3', '2018-02-09 09:36:10');
INSERT INTO `ordergoods` VALUES ('330', '1518140197000', '3', '2018-02-09 09:36:10');
INSERT INTO `ordergoods` VALUES ('331', '1518140197000', '3', '2018-02-09 09:36:10');
INSERT INTO `ordergoods` VALUES ('332', '1518140197000', '3', '2018-02-09 09:36:10');
INSERT INTO `ordergoods` VALUES ('333', '1518140197000', '4', '2018-02-09 09:36:10');
INSERT INTO `ordergoods` VALUES ('334', '1518140197000', '4', '2018-02-09 09:36:10');
INSERT INTO `ordergoods` VALUES ('335', '1518140197000', '8', '2018-02-09 09:36:10');
INSERT INTO `ordergoods` VALUES ('336', '1518140197000', '11', '2018-02-09 09:36:10');
INSERT INTO `ordergoods` VALUES ('337', '1518140197000', '11', '2018-02-09 09:36:10');
INSERT INTO `ordergoods` VALUES ('338', '1518140197000', '11', '2018-02-09 09:36:10');
INSERT INTO `ordergoods` VALUES ('339', '1518140197000', '14', '2018-02-09 09:36:10');
INSERT INTO `ordergoods` VALUES ('340', '1518140197000', '14', '2018-02-09 09:36:10');
INSERT INTO `ordergoods` VALUES ('341', '1518140197000', '14', '2018-02-09 09:36:10');
INSERT INTO `ordergoods` VALUES ('342', '1518140197000', '14', '2018-02-09 09:36:10');
INSERT INTO `ordergoods` VALUES ('343', '1518140197000', '14', '2018-02-09 09:36:10');
INSERT INTO `ordergoods` VALUES ('344', '1518140197000', '14', '2018-02-09 09:36:10');
INSERT INTO `ordergoods` VALUES ('345', '1518140197000', '14', '2018-02-09 09:36:10');
INSERT INTO `ordergoods` VALUES ('346', '1518140197000', '14', '2018-02-09 09:36:10');
INSERT INTO `ordergoods` VALUES ('347', '1518140197000', '14', '2018-02-09 09:36:10');
INSERT INTO `ordergoods` VALUES ('348', '1518140197000', '14', '2018-02-09 09:36:10');
INSERT INTO `ordergoods` VALUES ('349', '1518140197000', '14', '2018-02-09 09:36:10');
INSERT INTO `ordergoods` VALUES ('350', '1518140197000', '14', '2018-02-09 09:36:10');
INSERT INTO `ordergoods` VALUES ('351', '1518140197000', '14', '2018-02-09 09:36:10');
INSERT INTO `ordergoods` VALUES ('352', '1518140197000', '14', '2018-02-09 09:36:10');
INSERT INTO `ordergoods` VALUES ('353', '1518140197000', '14', '2018-02-09 09:36:10');
INSERT INTO `ordergoods` VALUES ('354', '1518140202000', '3', '2018-02-09 09:36:15');
INSERT INTO `ordergoods` VALUES ('355', '1518140202000', '3', '2018-02-09 09:36:15');
INSERT INTO `ordergoods` VALUES ('356', '1518140202000', '3', '2018-02-09 09:36:15');
INSERT INTO `ordergoods` VALUES ('357', '1518140202000', '3', '2018-02-09 09:36:15');
INSERT INTO `ordergoods` VALUES ('358', '1518140202000', '3', '2018-02-09 09:36:15');
INSERT INTO `ordergoods` VALUES ('359', '1518140202000', '4', '2018-02-09 09:36:15');
INSERT INTO `ordergoods` VALUES ('360', '1518140202000', '4', '2018-02-09 09:36:15');
INSERT INTO `ordergoods` VALUES ('361', '1518140202000', '8', '2018-02-09 09:36:15');
INSERT INTO `ordergoods` VALUES ('362', '1518140202000', '11', '2018-02-09 09:36:15');
INSERT INTO `ordergoods` VALUES ('363', '1518140202000', '11', '2018-02-09 09:36:15');
INSERT INTO `ordergoods` VALUES ('364', '1518140202000', '11', '2018-02-09 09:36:15');
INSERT INTO `ordergoods` VALUES ('365', '1518140202000', '14', '2018-02-09 09:36:15');
INSERT INTO `ordergoods` VALUES ('366', '1518140202000', '14', '2018-02-09 09:36:15');
INSERT INTO `ordergoods` VALUES ('367', '1518140202000', '14', '2018-02-09 09:36:15');
INSERT INTO `ordergoods` VALUES ('368', '1518140202000', '14', '2018-02-09 09:36:15');
INSERT INTO `ordergoods` VALUES ('369', '1518140202000', '14', '2018-02-09 09:36:15');
INSERT INTO `ordergoods` VALUES ('370', '1518140202000', '14', '2018-02-09 09:36:15');
INSERT INTO `ordergoods` VALUES ('371', '1518140202000', '14', '2018-02-09 09:36:15');
INSERT INTO `ordergoods` VALUES ('372', '1518140202000', '14', '2018-02-09 09:36:15');
INSERT INTO `ordergoods` VALUES ('373', '1518140202000', '14', '2018-02-09 09:36:15');
INSERT INTO `ordergoods` VALUES ('374', '1518140202000', '14', '2018-02-09 09:36:15');
INSERT INTO `ordergoods` VALUES ('375', '1518140202000', '14', '2018-02-09 09:36:15');
INSERT INTO `ordergoods` VALUES ('376', '1518140202000', '14', '2018-02-09 09:36:15');
INSERT INTO `ordergoods` VALUES ('377', '1518140202000', '14', '2018-02-09 09:36:15');
INSERT INTO `ordergoods` VALUES ('378', '1518140202000', '14', '2018-02-09 09:36:15');
INSERT INTO `ordergoods` VALUES ('379', '1518140202000', '14', '2018-02-09 09:36:15');
INSERT INTO `ordergoods` VALUES ('380', '1518140226000', '3', '2018-02-09 09:36:39');
INSERT INTO `ordergoods` VALUES ('381', '1518140226000', '3', '2018-02-09 09:36:39');
INSERT INTO `ordergoods` VALUES ('382', '1518140226000', '3', '2018-02-09 09:36:39');
INSERT INTO `ordergoods` VALUES ('383', '1518140226000', '3', '2018-02-09 09:36:39');
INSERT INTO `ordergoods` VALUES ('384', '1518140226000', '3', '2018-02-09 09:36:39');
INSERT INTO `ordergoods` VALUES ('385', '1518140226000', '4', '2018-02-09 09:36:39');
INSERT INTO `ordergoods` VALUES ('386', '1518140226000', '4', '2018-02-09 09:36:39');
INSERT INTO `ordergoods` VALUES ('387', '1518140226000', '8', '2018-02-09 09:36:39');
INSERT INTO `ordergoods` VALUES ('388', '1518140226000', '11', '2018-02-09 09:36:39');
INSERT INTO `ordergoods` VALUES ('389', '1518140226000', '11', '2018-02-09 09:36:39');
INSERT INTO `ordergoods` VALUES ('390', '1518140226000', '11', '2018-02-09 09:36:39');
INSERT INTO `ordergoods` VALUES ('391', '1518140226000', '14', '2018-02-09 09:36:39');
INSERT INTO `ordergoods` VALUES ('392', '1518140226000', '14', '2018-02-09 09:36:39');
INSERT INTO `ordergoods` VALUES ('393', '1518140226000', '14', '2018-02-09 09:36:39');
INSERT INTO `ordergoods` VALUES ('394', '1518140226000', '14', '2018-02-09 09:36:39');
INSERT INTO `ordergoods` VALUES ('395', '1518140226000', '14', '2018-02-09 09:36:39');
INSERT INTO `ordergoods` VALUES ('396', '1518140226000', '14', '2018-02-09 09:36:39');
INSERT INTO `ordergoods` VALUES ('397', '1518140226000', '14', '2018-02-09 09:36:39');
INSERT INTO `ordergoods` VALUES ('398', '1518140226000', '14', '2018-02-09 09:36:39');
INSERT INTO `ordergoods` VALUES ('399', '1518140226000', '14', '2018-02-09 09:36:39');
INSERT INTO `ordergoods` VALUES ('400', '1518140226000', '14', '2018-02-09 09:36:39');
INSERT INTO `ordergoods` VALUES ('401', '1518140226000', '14', '2018-02-09 09:36:39');
INSERT INTO `ordergoods` VALUES ('402', '1518140226000', '14', '2018-02-09 09:36:39');
INSERT INTO `ordergoods` VALUES ('403', '1518140226000', '14', '2018-02-09 09:36:39');
INSERT INTO `ordergoods` VALUES ('404', '1518140226000', '14', '2018-02-09 09:36:39');
INSERT INTO `ordergoods` VALUES ('405', '1518140226000', '14', '2018-02-09 09:36:39');
INSERT INTO `ordergoods` VALUES ('406', '1518140276000', '3', '2018-02-09 09:37:30');
INSERT INTO `ordergoods` VALUES ('407', '1518140276000', '3', '2018-02-09 09:37:30');
INSERT INTO `ordergoods` VALUES ('408', '1518140276000', '3', '2018-02-09 09:37:30');
INSERT INTO `ordergoods` VALUES ('409', '1518140276000', '3', '2018-02-09 09:37:30');
INSERT INTO `ordergoods` VALUES ('410', '1518140276000', '3', '2018-02-09 09:37:30');
INSERT INTO `ordergoods` VALUES ('411', '1518140276000', '4', '2018-02-09 09:37:30');
INSERT INTO `ordergoods` VALUES ('412', '1518140276000', '4', '2018-02-09 09:37:30');
INSERT INTO `ordergoods` VALUES ('413', '1518140276000', '8', '2018-02-09 09:37:30');
INSERT INTO `ordergoods` VALUES ('414', '1518140276000', '11', '2018-02-09 09:37:30');
INSERT INTO `ordergoods` VALUES ('415', '1518140276000', '11', '2018-02-09 09:37:30');
INSERT INTO `ordergoods` VALUES ('416', '1518140276000', '11', '2018-02-09 09:37:30');
INSERT INTO `ordergoods` VALUES ('417', '1518140276000', '14', '2018-02-09 09:37:30');
INSERT INTO `ordergoods` VALUES ('418', '1518140276000', '14', '2018-02-09 09:37:30');
INSERT INTO `ordergoods` VALUES ('419', '1518140276000', '14', '2018-02-09 09:37:30');
INSERT INTO `ordergoods` VALUES ('420', '1518140276000', '14', '2018-02-09 09:37:30');
INSERT INTO `ordergoods` VALUES ('421', '1518140276000', '14', '2018-02-09 09:37:30');
INSERT INTO `ordergoods` VALUES ('422', '1518140276000', '14', '2018-02-09 09:37:30');
INSERT INTO `ordergoods` VALUES ('423', '1518140276000', '14', '2018-02-09 09:37:30');
INSERT INTO `ordergoods` VALUES ('424', '1518140276000', '14', '2018-02-09 09:37:30');
INSERT INTO `ordergoods` VALUES ('425', '1518140276000', '14', '2018-02-09 09:37:30');
INSERT INTO `ordergoods` VALUES ('426', '1518140276000', '14', '2018-02-09 09:37:30');
INSERT INTO `ordergoods` VALUES ('427', '1518140276000', '14', '2018-02-09 09:37:30');
INSERT INTO `ordergoods` VALUES ('428', '1518140276000', '14', '2018-02-09 09:37:30');
INSERT INTO `ordergoods` VALUES ('429', '1518140276000', '14', '2018-02-09 09:37:30');
INSERT INTO `ordergoods` VALUES ('430', '1518140276000', '14', '2018-02-09 09:37:30');
INSERT INTO `ordergoods` VALUES ('431', '1518140276000', '14', '2018-02-09 09:37:30');
INSERT INTO `ordergoods` VALUES ('432', '1518140276000', '14', '2018-02-09 09:37:30');
INSERT INTO `ordergoods` VALUES ('433', '1518140276000', '14', '2018-02-09 09:37:30');
INSERT INTO `ordergoods` VALUES ('434', '1518140349000', '3', '2018-02-09 09:38:43');
INSERT INTO `ordergoods` VALUES ('435', '1518140349000', '3', '2018-02-09 09:38:43');
INSERT INTO `ordergoods` VALUES ('436', '1518140349000', '3', '2018-02-09 09:38:43');
INSERT INTO `ordergoods` VALUES ('437', '1518140349000', '3', '2018-02-09 09:38:43');
INSERT INTO `ordergoods` VALUES ('438', '1518140349000', '3', '2018-02-09 09:38:43');
INSERT INTO `ordergoods` VALUES ('439', '1518140349000', '4', '2018-02-09 09:38:43');
INSERT INTO `ordergoods` VALUES ('440', '1518140349000', '4', '2018-02-09 09:38:43');
INSERT INTO `ordergoods` VALUES ('441', '1518140349000', '8', '2018-02-09 09:38:43');
INSERT INTO `ordergoods` VALUES ('442', '1518140349000', '11', '2018-02-09 09:38:43');
INSERT INTO `ordergoods` VALUES ('443', '1518140349000', '11', '2018-02-09 09:38:43');
INSERT INTO `ordergoods` VALUES ('444', '1518140349000', '11', '2018-02-09 09:38:43');
INSERT INTO `ordergoods` VALUES ('445', '1518140349000', '14', '2018-02-09 09:38:43');
INSERT INTO `ordergoods` VALUES ('446', '1518140349000', '14', '2018-02-09 09:38:43');
INSERT INTO `ordergoods` VALUES ('447', '1518140349000', '14', '2018-02-09 09:38:43');
INSERT INTO `ordergoods` VALUES ('448', '1518140349000', '14', '2018-02-09 09:38:43');
INSERT INTO `ordergoods` VALUES ('449', '1518140349000', '14', '2018-02-09 09:38:43');
INSERT INTO `ordergoods` VALUES ('450', '1518140349000', '14', '2018-02-09 09:38:43');
INSERT INTO `ordergoods` VALUES ('451', '1518140349000', '14', '2018-02-09 09:38:43');
INSERT INTO `ordergoods` VALUES ('452', '1518140349000', '14', '2018-02-09 09:38:43');
INSERT INTO `ordergoods` VALUES ('453', '1518140349000', '14', '2018-02-09 09:38:43');
INSERT INTO `ordergoods` VALUES ('454', '1518140349000', '14', '2018-02-09 09:38:43');
INSERT INTO `ordergoods` VALUES ('455', '1518140349000', '14', '2018-02-09 09:38:43');
INSERT INTO `ordergoods` VALUES ('456', '1518140349000', '14', '2018-02-09 09:38:43');
INSERT INTO `ordergoods` VALUES ('457', '1518140349000', '14', '2018-02-09 09:38:43');
INSERT INTO `ordergoods` VALUES ('458', '1518140349000', '14', '2018-02-09 09:38:43');
INSERT INTO `ordergoods` VALUES ('459', '1518140349000', '14', '2018-02-09 09:38:43');
INSERT INTO `ordergoods` VALUES ('460', '1518140349000', '14', '2018-02-09 09:38:43');
INSERT INTO `ordergoods` VALUES ('461', '1518140349000', '14', '2018-02-09 09:38:43');
INSERT INTO `ordergoods` VALUES ('462', '1518140349000', '14', '2018-02-09 09:38:43');
INSERT INTO `ordergoods` VALUES ('463', '1518140389000', '3', '2018-02-09 09:39:23');
INSERT INTO `ordergoods` VALUES ('464', '1518140389000', '3', '2018-02-09 09:39:23');
INSERT INTO `ordergoods` VALUES ('465', '1518140389000', '3', '2018-02-09 09:39:23');
INSERT INTO `ordergoods` VALUES ('466', '1518140389000', '3', '2018-02-09 09:39:23');
INSERT INTO `ordergoods` VALUES ('467', '1518140389000', '3', '2018-02-09 09:39:23');
INSERT INTO `ordergoods` VALUES ('468', '1518140389000', '4', '2018-02-09 09:39:23');
INSERT INTO `ordergoods` VALUES ('469', '1518140389000', '4', '2018-02-09 09:39:23');
INSERT INTO `ordergoods` VALUES ('470', '1518140389000', '8', '2018-02-09 09:39:23');
INSERT INTO `ordergoods` VALUES ('471', '1518140389000', '11', '2018-02-09 09:39:23');
INSERT INTO `ordergoods` VALUES ('472', '1518140389000', '11', '2018-02-09 09:39:23');
INSERT INTO `ordergoods` VALUES ('473', '1518140389000', '11', '2018-02-09 09:39:23');
INSERT INTO `ordergoods` VALUES ('474', '1518140389000', '14', '2018-02-09 09:39:23');
INSERT INTO `ordergoods` VALUES ('475', '1518140389000', '14', '2018-02-09 09:39:23');
INSERT INTO `ordergoods` VALUES ('476', '1518140389000', '14', '2018-02-09 09:39:23');
INSERT INTO `ordergoods` VALUES ('477', '1518140389000', '14', '2018-02-09 09:39:23');
INSERT INTO `ordergoods` VALUES ('478', '1518140389000', '14', '2018-02-09 09:39:23');
INSERT INTO `ordergoods` VALUES ('479', '1518140389000', '14', '2018-02-09 09:39:23');
INSERT INTO `ordergoods` VALUES ('480', '1518140389000', '14', '2018-02-09 09:39:23');
INSERT INTO `ordergoods` VALUES ('481', '1518140389000', '14', '2018-02-09 09:39:23');
INSERT INTO `ordergoods` VALUES ('482', '1518140389000', '14', '2018-02-09 09:39:23');
INSERT INTO `ordergoods` VALUES ('483', '1518140389000', '14', '2018-02-09 09:39:23');
INSERT INTO `ordergoods` VALUES ('484', '1518140389000', '14', '2018-02-09 09:39:23');
INSERT INTO `ordergoods` VALUES ('485', '1518140389000', '14', '2018-02-09 09:39:23');
INSERT INTO `ordergoods` VALUES ('486', '1518140389000', '14', '2018-02-09 09:39:23');
INSERT INTO `ordergoods` VALUES ('487', '1518140389000', '14', '2018-02-09 09:39:23');
INSERT INTO `ordergoods` VALUES ('488', '1518140389000', '14', '2018-02-09 09:39:23');
INSERT INTO `ordergoods` VALUES ('489', '1518140389000', '14', '2018-02-09 09:39:23');
INSERT INTO `ordergoods` VALUES ('490', '1518140389000', '14', '2018-02-09 09:39:23');
INSERT INTO `ordergoods` VALUES ('491', '1518140389000', '14', '2018-02-09 09:39:23');
INSERT INTO `ordergoods` VALUES ('492', '1518140530000', '3', '2018-02-09 09:41:44');
INSERT INTO `ordergoods` VALUES ('493', '1518140530000', '3', '2018-02-09 09:41:44');
INSERT INTO `ordergoods` VALUES ('494', '1518140530000', '3', '2018-02-09 09:41:44');
INSERT INTO `ordergoods` VALUES ('495', '1518140530000', '3', '2018-02-09 09:41:44');
INSERT INTO `ordergoods` VALUES ('496', '1518140530000', '3', '2018-02-09 09:41:44');
INSERT INTO `ordergoods` VALUES ('497', '1518140530000', '4', '2018-02-09 09:41:44');
INSERT INTO `ordergoods` VALUES ('498', '1518140530000', '4', '2018-02-09 09:41:44');
INSERT INTO `ordergoods` VALUES ('499', '1518140530000', '8', '2018-02-09 09:41:44');
INSERT INTO `ordergoods` VALUES ('500', '1518140530000', '11', '2018-02-09 09:41:44');
INSERT INTO `ordergoods` VALUES ('501', '1518140530000', '11', '2018-02-09 09:41:44');
INSERT INTO `ordergoods` VALUES ('502', '1518140530000', '11', '2018-02-09 09:41:44');
INSERT INTO `ordergoods` VALUES ('503', '1518140530000', '14', '2018-02-09 09:41:44');
INSERT INTO `ordergoods` VALUES ('504', '1518140530000', '14', '2018-02-09 09:41:44');
INSERT INTO `ordergoods` VALUES ('505', '1518140530000', '14', '2018-02-09 09:41:44');
INSERT INTO `ordergoods` VALUES ('506', '1518140530000', '14', '2018-02-09 09:41:44');
INSERT INTO `ordergoods` VALUES ('507', '1518140530000', '14', '2018-02-09 09:41:44');
INSERT INTO `ordergoods` VALUES ('508', '1518140530000', '14', '2018-02-09 09:41:44');
INSERT INTO `ordergoods` VALUES ('509', '1518140530000', '14', '2018-02-09 09:41:44');
INSERT INTO `ordergoods` VALUES ('510', '1518140530000', '14', '2018-02-09 09:41:44');
INSERT INTO `ordergoods` VALUES ('511', '1518140530000', '14', '2018-02-09 09:41:44');
INSERT INTO `ordergoods` VALUES ('512', '1518140530000', '14', '2018-02-09 09:41:44');
INSERT INTO `ordergoods` VALUES ('513', '1518140530000', '14', '2018-02-09 09:41:44');
INSERT INTO `ordergoods` VALUES ('514', '1518140530000', '14', '2018-02-09 09:41:44');
INSERT INTO `ordergoods` VALUES ('515', '1518140530000', '14', '2018-02-09 09:41:44');
INSERT INTO `ordergoods` VALUES ('516', '1518140530000', '14', '2018-02-09 09:41:44');
INSERT INTO `ordergoods` VALUES ('517', '1518140530000', '14', '2018-02-09 09:41:44');
INSERT INTO `ordergoods` VALUES ('518', '1518140530000', '14', '2018-02-09 09:41:44');
INSERT INTO `ordergoods` VALUES ('519', '1518140530000', '14', '2018-02-09 09:41:44');
INSERT INTO `ordergoods` VALUES ('520', '1518140530000', '14', '2018-02-09 09:41:44');
INSERT INTO `ordergoods` VALUES ('521', '1518140562000', '9', '2018-02-09 09:42:15');
INSERT INTO `ordergoods` VALUES ('522', '1518140562000', '9', '2018-02-09 09:42:15');
INSERT INTO `ordergoods` VALUES ('523', '1518140562000', '9', '2018-02-09 09:42:15');
INSERT INTO `ordergoods` VALUES ('524', '1518140562000', '10', '2018-02-09 09:42:15');
INSERT INTO `ordergoods` VALUES ('525', '1518140562000', '10', '2018-02-09 09:42:15');
INSERT INTO `ordergoods` VALUES ('526', '1518140562000', '10', '2018-02-09 09:42:15');
INSERT INTO `ordergoods` VALUES ('527', '1518140562000', '10', '2018-02-09 09:42:15');
INSERT INTO `ordergoods` VALUES ('528', '1518140664000', '9', '2018-02-09 09:43:57');
INSERT INTO `ordergoods` VALUES ('529', '1518140664000', '9', '2018-02-09 09:43:57');
INSERT INTO `ordergoods` VALUES ('530', '1518140664000', '9', '2018-02-09 09:43:57');
INSERT INTO `ordergoods` VALUES ('531', '1518140664000', '10', '2018-02-09 09:43:57');
INSERT INTO `ordergoods` VALUES ('532', '1518140664000', '10', '2018-02-09 09:43:57');
INSERT INTO `ordergoods` VALUES ('533', '1518140664000', '10', '2018-02-09 09:43:57');
INSERT INTO `ordergoods` VALUES ('534', '1518140664000', '10', '2018-02-09 09:43:57');
INSERT INTO `ordergoods` VALUES ('535', '1518140747000', '9', '2018-02-09 09:45:20');
INSERT INTO `ordergoods` VALUES ('536', '1518140747000', '9', '2018-02-09 09:45:20');
INSERT INTO `ordergoods` VALUES ('537', '1518140747000', '9', '2018-02-09 09:45:20');
INSERT INTO `ordergoods` VALUES ('538', '1518140747000', '10', '2018-02-09 09:45:20');
INSERT INTO `ordergoods` VALUES ('539', '1518140747000', '10', '2018-02-09 09:45:20');
INSERT INTO `ordergoods` VALUES ('540', '1518140747000', '10', '2018-02-09 09:45:20');
INSERT INTO `ordergoods` VALUES ('541', '1518140747000', '10', '2018-02-09 09:45:20');
INSERT INTO `ordergoods` VALUES ('542', '1518140747000', '10', '2018-02-09 09:45:20');
INSERT INTO `ordergoods` VALUES ('543', '1518140747000', '10', '2018-02-09 09:45:20');
INSERT INTO `ordergoods` VALUES ('544', '1518140747000', '10', '2018-02-09 09:45:20');
INSERT INTO `ordergoods` VALUES ('545', '1518140747000', '14', '2018-02-09 09:45:20');
INSERT INTO `ordergoods` VALUES ('546', '1518141604000', '2', '2018-02-09 09:59:37');
INSERT INTO `ordergoods` VALUES ('547', '1518141604000', '2', '2018-02-09 09:59:37');
INSERT INTO `ordergoods` VALUES ('548', '1518141604000', '2', '2018-02-09 09:59:37');
INSERT INTO `ordergoods` VALUES ('549', '1518141604000', '1', '2018-02-09 09:59:37');
INSERT INTO `ordergoods` VALUES ('550', '1518141604000', '1', '2018-02-09 09:59:37');
INSERT INTO `ordergoods` VALUES ('551', '1518144940000', '14', '2018-02-09 10:55:13');
INSERT INTO `ordergoods` VALUES ('552', '1518144940000', '14', '2018-02-09 10:55:13');
INSERT INTO `ordergoods` VALUES ('553', '1518144940000', '14', '2018-02-09 10:55:13');
INSERT INTO `ordergoods` VALUES ('554', '1518144940000', '14', '2018-02-09 10:55:13');
INSERT INTO `ordergoods` VALUES ('555', '1518144948000', '14', '2018-02-09 10:55:20');
INSERT INTO `ordergoods` VALUES ('556', '1518144948000', '14', '2018-02-09 10:55:21');
INSERT INTO `ordergoods` VALUES ('557', '1518144948000', '14', '2018-02-09 10:55:21');
INSERT INTO `ordergoods` VALUES ('558', '1518144948000', '14', '2018-02-09 10:55:21');
INSERT INTO `ordergoods` VALUES ('559', '1518144998000', '14', '2018-02-09 10:56:11');
INSERT INTO `ordergoods` VALUES ('560', '1518144998000', '14', '2018-02-09 10:56:11');
INSERT INTO `ordergoods` VALUES ('561', '1518144998000', '14', '2018-02-09 10:56:11');
INSERT INTO `ordergoods` VALUES ('562', '1518144998000', '14', '2018-02-09 10:56:11');
INSERT INTO `ordergoods` VALUES ('563', '1518145137000', '14', '2018-02-09 10:58:30');
INSERT INTO `ordergoods` VALUES ('564', '1518145137000', '14', '2018-02-09 10:58:30');
INSERT INTO `ordergoods` VALUES ('565', '1518145137000', '14', '2018-02-09 10:58:30');
INSERT INTO `ordergoods` VALUES ('566', '1518145137000', '14', '2018-02-09 10:58:30');
INSERT INTO `ordergoods` VALUES ('567', '1518145208000', '9', '2018-02-09 10:59:41');
INSERT INTO `ordergoods` VALUES ('568', '1518145208000', '9', '2018-02-09 10:59:41');
INSERT INTO `ordergoods` VALUES ('569', '1518145208000', '9', '2018-02-09 10:59:41');
INSERT INTO `ordergoods` VALUES ('570', '1518145208000', '14', '2018-02-09 10:59:41');
INSERT INTO `ordergoods` VALUES ('571', '1518145312000', '14', '2018-02-09 11:01:24');
INSERT INTO `ordergoods` VALUES ('572', '1518145312000', '14', '2018-02-09 11:01:24');
INSERT INTO `ordergoods` VALUES ('573', '1518145312000', '14', '2018-02-09 11:01:24');
INSERT INTO `ordergoods` VALUES ('574', '1518145312000', '14', '2018-02-09 11:01:24');
INSERT INTO `ordergoods` VALUES ('575', '1518145312000', '14', '2018-02-09 11:01:24');
INSERT INTO `ordergoods` VALUES ('576', '1518150414000', '14', '2018-02-09 12:28:57');
INSERT INTO `ordergoods` VALUES ('577', '1518150414000', '14', '2018-02-09 12:28:57');
INSERT INTO `ordergoods` VALUES ('578', '1518150414000', '14', '2018-02-09 12:28:57');
INSERT INTO `ordergoods` VALUES ('579', '1518150414000', '14', '2018-02-09 12:28:57');
INSERT INTO `ordergoods` VALUES ('580', '1518150414000', '14', '2018-02-09 12:28:57');
INSERT INTO `ordergoods` VALUES ('581', '1518150414000', '14', '2018-02-09 12:28:57');
INSERT INTO `ordergoods` VALUES ('582', '1518150414000', '14', '2018-02-09 12:28:57');
INSERT INTO `ordergoods` VALUES ('583', '1518150414000', '14', '2018-02-09 12:28:57');
INSERT INTO `ordergoods` VALUES ('584', '1518150414000', '14', '2018-02-09 12:28:57');
INSERT INTO `ordergoods` VALUES ('585', '1518150414000', '14', '2018-02-09 12:28:57');
INSERT INTO `ordergoods` VALUES ('586', '1518150414000', '14', '2018-02-09 12:28:57');
INSERT INTO `ordergoods` VALUES ('587', '1518151061000', '14', '2018-02-09 12:37:41');
INSERT INTO `ordergoods` VALUES ('588', '1518151061000', '14', '2018-02-09 12:37:41');
INSERT INTO `ordergoods` VALUES ('589', '1518151061000', '14', '2018-02-09 12:37:41');
INSERT INTO `ordergoods` VALUES ('590', '1518154539000', '2', '2018-02-09 13:35:39');
INSERT INTO `ordergoods` VALUES ('591', '1518154582000', '2', '2018-02-09 13:36:22');
INSERT INTO `ordergoods` VALUES ('592', '1518154582000', '2', '2018-02-09 13:36:22');
INSERT INTO `ordergoods` VALUES ('593', '1518154582000', '1', '2018-02-09 13:36:22');
INSERT INTO `ordergoods` VALUES ('594', '1518156760000', '2', '2018-02-09 14:14:58');
INSERT INTO `ordergoods` VALUES ('595', '1518156880000', '9', '2018-02-09 14:16:42');
INSERT INTO `ordergoods` VALUES ('596', '1518156880000', '14', '2018-02-09 14:16:42');
INSERT INTO `ordergoods` VALUES ('597', '1518156880000', '14', '2018-02-09 14:16:42');
INSERT INTO `ordergoods` VALUES ('598', '1518157209000', '3', '2018-02-09 14:20:52');
INSERT INTO `ordergoods` VALUES ('599', '1518157209000', '5', '2018-02-09 14:20:52');
INSERT INTO `ordergoods` VALUES ('600', '1518157209000', '5', '2018-02-09 14:20:52');
INSERT INTO `ordergoods` VALUES ('601', '1518157209000', '5', '2018-02-09 14:20:52');
INSERT INTO `ordergoods` VALUES ('602', '1518157209000', '5', '2018-02-09 14:20:52');
INSERT INTO `ordergoods` VALUES ('603', '1518157209000', '5', '2018-02-09 14:20:52');
INSERT INTO `ordergoods` VALUES ('604', '1518157209000', '5', '2018-02-09 14:20:52');
INSERT INTO `ordergoods` VALUES ('605', '1518157209000', '5', '2018-02-09 14:20:52');
INSERT INTO `ordergoods` VALUES ('606', '1518157209000', '5', '2018-02-09 14:20:52');
INSERT INTO `ordergoods` VALUES ('607', '1518158026000', '14', '2018-02-09 14:35:49');
INSERT INTO `ordergoods` VALUES ('608', '1518158026000', '14', '2018-02-09 14:35:49');
INSERT INTO `ordergoods` VALUES ('609', '1518158026000', '14', '2018-02-09 14:35:49');
INSERT INTO `ordergoods` VALUES ('610', '1518158108000', '14', '2018-02-09 14:37:11');
INSERT INTO `ordergoods` VALUES ('611', '1518158108000', '14', '2018-02-09 14:37:11');
INSERT INTO `ordergoods` VALUES ('612', '1518158108000', '14', '2018-02-09 14:37:11');

-- ----------------------------
-- Table structure for petin
-- ----------------------------
DROP TABLE IF EXISTS `petin`;
CREATE TABLE `petin` (
  `petinid` int(50) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '0',
  `curprice` varchar(255) NOT NULL DEFAULT '0',
  `oriprice` varchar(255) NOT NULL DEFAULT '0',
  `imgurl` varchar(255) NOT NULL DEFAULT '0',
  PRIMARY KEY (`petinid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of petin
-- ----------------------------
INSERT INTO `petin` VALUES ('1', '宠儿香 宠物康源益生菌（实惠装）5g*24袋', '89.60', '128.00', '../src/assets/img/navList/6a6cc6970861b83d18eb14a481952395.jpg');
INSERT INTO `petin` VALUES ('2', '宠儿香 宠物康源益生菌 5g*5袋 ', '28.00', '35.00', '../src/assets/img/navList/3f765380572bc12a953cf35ba1321a08.jpg');
INSERT INTO `petin` VALUES ('3', '宠儿香 医院专用系列 狗用保肤康 60粒/瓶 ', '110.40', '138.00', '../src/assets/img/navList/2d6e97d0f99444748c80338a4adb2bda.jpg');
INSERT INTO `petin` VALUES ('4', '宠儿香家庭专用系列 康健营养罐头 90g 术后/病后/体弱专用', '12.80', '16.00', '../src/assets/img/navList/a1d260415f63b94819a12064f91231f8.jpg');
INSERT INTO `petin` VALUES ('5', '宠儿香 家庭专用系列 宠物奶瓶 150ml', '9.50', '19.00', '../src/assets/img/navList/216dd3de6885ccc3b795ca9713ec929a.jpg');

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `goodId` varchar(255) NOT NULL COMMENT '商品id',
  `goodName` varchar(255) DEFAULT NULL COMMENT '商品名称',
  `originPrice` varchar(10) DEFAULT NULL COMMENT '原价',
  `Price` varchar(10) DEFAULT NULL COMMENT '折扣价',
  `sale` varchar(255) DEFAULT NULL COMMENT '已售数量',
  `size` varchar(255) DEFAULT NULL COMMENT '商品规格',
  `describe` varchar(255) DEFAULT NULL COMMENT '商品描述',
  `categoryId` varchar(255) DEFAULT NULL,
  `category1Id` varchar(255) DEFAULT NULL COMMENT '大分类',
  `classify2Id` varchar(255) DEFAULT NULL COMMENT '小分类',
  `brand` varchar(255) DEFAULT '' COMMENT '商品品牌',
  `addTime` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`goodId`)
) ENGINE=MyISAM AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('2', '佩玛思特 新鲜三文鱼+益生菌肠道舒适犬粮 2kg', '250.80', '209.00', '253', '52.25元/斤', '天然非转基因 提供天然特殊保护 无谷蛋白 营养更均衡', '1', '2', '1', '佩玛思特', '2018-02-05 09:49:10');
INSERT INTO `product` VALUES ('3', '畅享Cheer Share 功能粮 万寿菊祛泪痕全犬粮 1.5kg', '178.80', '149.00', '60', '49.66元/斤', '呵护眼睛 保护视力 抗炎通泪 清润祛火', '1', '2', '1', '畅享Cheer Share', '2018-02-05 09:49:11');
INSERT INTO `product` VALUES ('4', '纯皓Nutrifresh 天然无谷系列大型犬幼犬粮 2.7kg', '234.00', '195.00', '124', '36.11元/斤', '无谷物 添加酵素精华 不易过敏 亲和肠道 营养好吸收 ', '1', '2', '4', '纯皓Nutrifresh', '2018-02-05 09:50:13');
INSERT INTO `product` VALUES ('5', '皇家royal canin MIS30小型犬奶糕/怀孕母犬/哺乳母犬1kg ', '82.80', '69.00', '510000', '34.50元/斤', '高蛋白子母粮 补充能量 均衡营养 好吸收易吸收', '1', '2', '2', '皇家royal canin', '2018-02-05 09:51:13');
INSERT INTO `product` VALUES ('6', '蓝氏LegendSandy 天然鹿肉小米全犬粮 33磅(14.96kg) ', '570.00', '495.00', '2243', '16.54元/斤', '强化骨骼 提高免疫 营养健脑滋补', '1', '2', '2', '蓝氏LegendSandy ', '2018-02-05 09:52:13');
INSERT INTO `product` VALUES ('7', '伯纳天纯 鸭肉&梨配方 全犬种粮 2kg ', '214.80', '179.00', '5463', '44.75元/斤', '清凉配方 清火气 助消化 营养好吸收', '1', '2', '4', '伯纳天纯', '2018-02-05 09:54:13');
INSERT INTO `product` VALUES ('8', '诺瑞 营养师系列 牛油果美毛营养全犬粮 10kg', '282.00', '235.00', '3852', '11.75元/斤', '添加牛油果精华 健肤美毛 焕发爱犬健康光彩', '1', '2', '1', '诺瑞Nory', '2018-02-05 09:56:13');
INSERT INTO `product` VALUES ('9', '比瑞吉 健康型天然粮 小型犬全价成犬粮 1.5kg', '98.40', '82.00', '43090', '27.33元/斤', '美皮毛 防老化 保鲜拉链密封', '1', '2', '2', '比瑞吉', '2018-02-05 09:57:13');
INSERT INTO `product` VALUES ('10', '冠能中型犬幼犬全价犬粮 12kg', '708.00', '559.00', '9262', '23.29元/斤', '雀巢旗下犬粮 经典配方 助消化 促成长', '1', '2', '1', '冠能', '2018-02-05 09:58:13');
INSERT INTO `product` VALUES ('11', '伯纳天纯 低敏无谷中大型犬成犬粮 15kg', '598.80', '499.00', '21234', '16.63元/斤', ' 健胃促吸收 蓬松亮毛 体态优化 健骨护关节', '1', '2', '4', '伯纳天纯', '2018-02-05 09:59:13');
INSERT INTO `product` VALUES ('12', '皇家royal canin MIS30小型犬奶糕/怀孕母犬/哺乳母犬1kg ', '223.20', '186.00', '23456', '31.00元/斤', '高蛋白子母粮 均衡营养 健肤亮毛', '1', '2', '5', '皇家royal canin', '2018-02-05 10:00:13');
INSERT INTO `product` VALUES ('1', '澳大利亚贵族Natures Gift 牛肉+三文鱼 全犬粮 12kg ', '490.00', '420.00', '2342', '17.50元/斤', '澳大利亚品牌 添加鸸鹋油 健肤美毛', '1', '2', '1', '贵族Natures Gift', '0000-00-00 00:00:00');
INSERT INTO `product` VALUES ('13', '韩国BOTH 山羊奶粉 450g', '140.00', '88.00', '74567', '17.50元/斤', '补充营养 促进骨骼发育 增强免疫力', '3', '8', '11', 'BOTH', '2018-02-05 09:57:15');
INSERT INTO `product` VALUES ('14', '美国麦德氏 IN-PLUS日常照护营养系列 犬用浓缩卵磷脂 培根味 680g（约300颗）', '170.00', '130.00', '31234', '17.50元/斤', '带包装盒 亮丽毛发 增加奶水 增强免疫 改善吠叫', '3', '8', '9', '麦德氏', '2018-02-05 10:18:30');
INSERT INTO `product` VALUES ('15', '英国MAG 优质配方羊奶粉 适用成幼犬400g ', '117.00', '98.00', '513452', '17.50元/斤', '不易上火 DHA益生菌配方促智力 益生菌配方护肠胃 益智活力', '3', '8', '9', 'MAG', '2018-02-05 10:22:05');
INSERT INTO `product` VALUES ('16', '红狗RedDog 犬用营养膏 120g', '98.00', '85.00', '3123', '17.50元/斤', '浓缩营养 提高免疫力', '3', '8', '9', '红狗RedDog', '2018-02-05 10:24:17');
INSERT INTO `product` VALUES ('17', '美国品牌麦德氏 IN-Basic四合一配方羊奶粉 300g', '75.00', '90.00', '3234', '17.50元/斤', '天然乳钙 低乳糖 解决腹泻困扰 新老包装随机发', '3', '8', '9', '麦德氏', '2018-02-05 10:26:48');
INSERT INTO `product` VALUES ('18', '蒙贝 宠物羊奶粉 400g', '88.00', '66.00', '234', '17.50元/斤', '内蒙古原生态奶源 助生长发育 低敏护肠道 易消化吸收 不腹泻不上火', '3', '8', '9', '蒙贝', '2018-02-05 10:35:32');
INSERT INTO `product` VALUES ('19', '医仕高 犬用高能营养膏 120g', '88.00', '56.00', '4586', '17.50元/斤', '牛肉+三文鱼味 天然营养', '3', '8', '9', ' 医仕高', '2018-02-05 10:36:57');
INSERT INTO `product` VALUES ('20', 'ZEAL 犬用天然鲜牛乳 380ml', '38.00', '37.00', '2216', '17.50元/斤', '新西兰进口 味道浓郁 不含乳糖', '3', '8', '9', 'Zeal', '2018-02-05 10:39:04');
INSERT INTO `product` VALUES ('21', '菲派 犬用菲速达蜂能营养膏120g', '188.00', '168.00', '608', '17.50元/斤', '适应体弱/哺乳期以及病后/术后恢复期犬猫', '3', '8', '9', '菲派Feel Pet', '2018-02-05 10:40:13');
INSERT INTO `product` VALUES ('22', '美国麦德氏 IN-PLUS日常照护营养系列 犬用浓缩卵磷脂 培根味 300g（约130颗）', '90.00', '70.00', '51234', '17.50元/斤', '带包装盒 亮丽毛发 增加奶水 增强免疫 改善吠叫', '3', '8', '9', '麦德氏', '2018-02-05 10:41:52');
INSERT INTO `product` VALUES ('23', '美国麦德氏 IN-PLUS日常照护营养系列 犬用速补高能营养膏 120g', '80.00', '55.00', '2456', '17.50元/斤', '补充能量 增强体力', '3', '8', '9', '麦德氏', '2018-02-05 10:43:29');
INSERT INTO `product` VALUES ('24', '谷登GOLDEN 犬用金装优加营养膏 120g', '58.00', '56.00', '123', '17.50元/斤', '多重高效优质营养', '3', '8', '9', '谷登GOLDEN', '2018-02-05 10:45:13');
INSERT INTO `product` VALUES ('25', '美国品牌麦德氏 IN-Vet犬用医护营养膏 55g', '234.00', '244.00', '4564', '17.50元/斤', '补充营养 增强免疫力', '3', '8', '9', '麦德氏', '2018-02-05 10:46:46');
INSERT INTO `product` VALUES ('26', '英国MAG 高能营养膏 120g', '112.00', '108.00', '98', '17.50元/斤', '补充能量 保护皮毛 增强免疫力 改善消化不良', '3', '8', '9', 'MAG', '2018-02-05 10:48:14');
INSERT INTO `product` VALUES ('27', '医仕高 犬用补血肝精养血素 29.6ml', '121.00', '75.00', '3455', '17.50元/斤', '抗病毒滴剂', '3', '8', '9', ' 医仕高', '2018-02-05 10:49:45');
INSERT INTO `product` VALUES ('28', '强生宠儿 多维速补营养膏 120g', '122.00', '89.00', '1245', '17.50元/斤', '能帮助狗狗补充营养 恢复体力 改善皮毛', '3', '8', '9', '强生宠儿', '2018-02-05 10:50:59');
INSERT INTO `product` VALUES ('29', '美国麦德氏 In-vet专业医护营养系列 犬用浓缩卵磷脂 550g', '180.00', '170.00', '6534', '17.50元/斤', '辅助皮肤治疗 光泽皮毛 美毛亮毛', '3', '8', '9', '麦德氏', '2018-02-05 10:52:29');
INSERT INTO `product` VALUES ('30', '美国麦德氏 IN-PLUS日常照护营养系列 犬用DHA配方羊奶粉 280g', '112.00', '98.00', '4778', '17.50元/斤', '易消化吸收 益智助长', '3', '8', '9', '麦德氏', '2018-02-05 10:53:42');
INSERT INTO `product` VALUES ('31', '美国麦德氏 In-vet专业医护营养系列 犬用医护营养膏 120g', '120.00', '98.00', '5555', '17.50元/斤', '补充营养 恢复活力 提升免疫力', '3', '8', '9', '麦德氏', '2018-02-05 10:55:51');
INSERT INTO `product` VALUES ('32', '医仕高 狗用神奇颗粒卵磷脂（素食）680g', '133.00', '123.00', '567', '17.50元/斤', '预防皮肤干燥 改善皮毛', '3', '8', '9', ' 医仕高', '2018-02-05 10:57:04');
INSERT INTO `product` VALUES ('33', '顽皮Wanpy 牛蹄筋+蔬菜 鲜封包 100g 1包', '5.99', '3.99', '3399', '17.50元/斤', '新老包装随机发 调节肠道菌群 保护视力 延缓衰老', '4', '3', '39', ' 医仕高', '2018-02-07 12:12:25');
INSERT INTO `product` VALUES ('34', '爱丽思IRIS 宠物拾便器 FN-160 粉色', '36.00', '26.12', '3547', '17.50元/斤', '16*10*10cm 一夹一扔 3秒搞定 清洁方便', '5', '6', '21', ' 医仕高', '2018-02-07 12:34:31');
INSERT INTO `product` VALUES ('35', '宝丽Petiy 360度旋转双层圆头针梳 中号 长15*宽6*针长1.4cm', '30.00', '60.99', '8000', '17.50元/斤', '外销日本 梳顺毛发防打结 促血液循环 解除疲劳', '6', '11', '29', ' 医仕高', '2018-02-07 12:42:24');
INSERT INTO `product` VALUES ('36', '11', '111', '11', '11', '11', '11', '6', '11', '29', '222', '2018-02-08 19:16:47');

-- ----------------------------
-- Table structure for productimg
-- ----------------------------
DROP TABLE IF EXISTS `productimg`;
CREATE TABLE `productimg` (
  `goodImgId` int(10) NOT NULL AUTO_INCREMENT COMMENT '商品图片',
  `goodId` int(20) DEFAULT NULL COMMENT '商品id',
  `ImgUrl` varchar(255) DEFAULT NULL COMMENT '商品图片',
  PRIMARY KEY (`goodImgId`)
) ENGINE=MyISAM AUTO_INCREMENT=82 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of productimg
-- ----------------------------
INSERT INTO `productimg` VALUES ('2', '2', '../../src/assets/img/food/46fcef2dcf8e870c0663a824c171b224.jpg');
INSERT INTO `productimg` VALUES ('3', '3', '../../src/assets/img/food/adee460feb9724f7beaf73edc5d7e371.jpg');
INSERT INTO `productimg` VALUES ('4', '4', '../../src/assets/img/food/5cfd69a728ded4e4a80fd69e58aa9705.jpg');
INSERT INTO `productimg` VALUES ('5', '5', '../../src/assets/img/food/625dc804ee057de62d033d0e173b5bb7.jpg');
INSERT INTO `productimg` VALUES ('6', '6', '../../src/assets/img/food/743ecdf27c86d15c004e1e312744168f.jpg');
INSERT INTO `productimg` VALUES ('7', '7', '../../src/assets/img/food/a0c83bf73be7132655275370e7bdde89.jpg');
INSERT INTO `productimg` VALUES ('8', '8', '../../src/assets/img/food/cfab4b1671cc41553b2454b1717850c3.jpg');
INSERT INTO `productimg` VALUES ('9', '9', '../../src/assets/img/food/3a7e2da47ed538314ba06c6d852933d2.jpg');
INSERT INTO `productimg` VALUES ('10', '10', '../../src/assets/img/food/fd96cf3b30a79397fb99fdfdf3d9ae0e.jpg');
INSERT INTO `productimg` VALUES ('11', '11', '../../src/assets/img/food/b673901a11db19aafdc0e0ae175544ce.jpg');
INSERT INTO `productimg` VALUES ('12', '12', '../../src/assets/img/food/625dc804ee057de62d033d0e173b5bb7.jpg');
INSERT INTO `productimg` VALUES ('58', '0', '../../src/assets/img/food/8c3359e64967362b5fc785a528faf5ff.jpg');
INSERT INTO `productimg` VALUES ('1', '1', '../../src/assets/img/food/cd4cb6a5d921ccf9273a42cddd71910a.jpg');
INSERT INTO `productimg` VALUES ('59', '14', '../../src/assets/img/food/1d5b35e2bbce02cec10ef19158776f0f.jpg');
INSERT INTO `productimg` VALUES ('60', '15', '../../src/assets/img/food/e9d557ad275060a67574834a21aecf15.jpg');
INSERT INTO `productimg` VALUES ('61', '16', '../../src/assets/img/food/233c37bf51851f2130f80dea17ef28d8.jpg');
INSERT INTO `productimg` VALUES ('62', '17', '../../src/assets/img/food/a4e2e7c71accdff17d09b8cb1b91a12e.jpg');
INSERT INTO `productimg` VALUES ('63', '18', '../../src/assets/img/food/c35110a929e2ed1b0312f76629874917.jpg');
INSERT INTO `productimg` VALUES ('64', '19', '../../src/assets/img/food/560a3dc659c5e3878339494a6c4bf46e.jpg');
INSERT INTO `productimg` VALUES ('65', '20', '../../src/assets/img/food/048a7265f0bedf018d8f7e48a7852ec7.jpg');
INSERT INTO `productimg` VALUES ('66', '21', '../../src/assets/img/food/2f57315f6f4ddc609f81548c4980a3d1.jpg');
INSERT INTO `productimg` VALUES ('67', '22', '../../src/assets/img/food/06409cdbfe282fbab9a62a078d88007a.jpg');
INSERT INTO `productimg` VALUES ('68', '23', '../../src/assets/img/food/e011a724fb2fc794c6b48820d504de4e.jpg');
INSERT INTO `productimg` VALUES ('69', '24', '../../src/assets/img/food/2360771cbb3b266c9f80659f4b78b326.jpg');
INSERT INTO `productimg` VALUES ('70', '25', '../../src/assets/img/food/48ac32fd263638f044e30222eaa3a274.jpg');
INSERT INTO `productimg` VALUES ('71', '26', '../../src/assets/img/food/c9787410d39559842a55bd1808525a99.jpg');
INSERT INTO `productimg` VALUES ('72', '27', '../../src/assets/img/food/cf59dc7689e0e5695e7a45acd041263b.jpg');
INSERT INTO `productimg` VALUES ('73', '28', '../../src/assets/img/food/7bef71dfbc601a864d3bd6b7e88fbf24.jpg');
INSERT INTO `productimg` VALUES ('74', '29', '../../src/assets/img/food/7397b0bf8eb526994770e877103fd9f1.jpg');
INSERT INTO `productimg` VALUES ('75', '30', '../../src/assets/img/food/92dc36232856cbb35587865c4ae8cee2.jpg');
INSERT INTO `productimg` VALUES ('76', '31', '../../src/assets/img/food/447a485a4c562e4902263d4d63b691ac.jpg');
INSERT INTO `productimg` VALUES ('77', '32', '../../src/assets/img/food/55d8502405cd5facc559217c8a1df3a1.jpg');
INSERT INTO `productimg` VALUES ('78', '33', '../../src/assets/img/food/ce933e31d8a09645483313a0695c891a.png');
INSERT INTO `productimg` VALUES ('79', '34', '../../src/assets/img/food/314fdf7940d800c4c41292dba3a958f4.jpg');
INSERT INTO `productimg` VALUES ('80', '35', '../../src/assets/img/food/3011722e548da212751382ae4e323830.jpg');
INSERT INTO `productimg` VALUES ('81', '36', '../../src/assets/img/food/3011722e548da212751382ae4e323830.jpg');

-- ----------------------------
-- Table structure for qc
-- ----------------------------
DROP TABLE IF EXISTS `qc`;
CREATE TABLE `qc` (
  `qcid` int(50) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '0',
  `curprice` varchar(255) NOT NULL DEFAULT '0',
  `oriprice` varchar(255) NOT NULL DEFAULT '0',
  `imgurl` varchar(255) NOT NULL DEFAULT '0',
  `state` varchar(255) NOT NULL DEFAULT '0' COMMENT '状态',
  PRIMARY KEY (`qcid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of qc
-- ----------------------------
INSERT INTO `qc` VALUES ('1', '谷登GOLDEN 犬用3段羊奶粉高钙壮骨配方 350g', '75', '98', '../src/assets/img/navList/f0da1020598515576ce1697c28e63177.jpg', '0');
INSERT INTO `qc` VALUES ('2', '谷登GOLDEN 犬用羊奶粉 350g', '75\r\n', '98', '../src/assets/img/navList/6be1a48ed52fb6357f62b3a59d537688.jpg', '0');
INSERT INTO `qc` VALUES ('3', '谷登GOLDEN 益生菌酵素配方肠胃宝 5g*12袋', '36', '48', '../src/assets/img/navList/814d8ce066729318e393370d667979c3.jpg', '0');
INSERT INTO `qc` VALUES ('4', '谷登GOLDEN 狗用金装优+钙世宝 120g', '49', '65', '../src/assets/img/navList/235e95f34462961cc8400a77df3e2b2b.jpg', '0');

-- ----------------------------
-- Table structure for tab
-- ----------------------------
DROP TABLE IF EXISTS `tab`;
CREATE TABLE `tab` (
  `tabId` varchar(255) NOT NULL COMMENT 'classify3Tab标签Id',
  `tabName` varchar(255) DEFAULT NULL COMMENT '标签名',
  `tabImg1` varchar(255) DEFAULT NULL COMMENT '标签图片无背景色',
  `tabImg2` varchar(255) DEFAULT NULL COMMENT '标签图片有背景色',
  `categoryId` varchar(255) DEFAULT NULL COMMENT '所属大分类',
  PRIMARY KEY (`tabId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tab
-- ----------------------------
INSERT INTO `tab` VALUES ('tabId1', '国产主粮', '../../src/assets/img/tab/443c7633200dacd9b0403985b45f42ac.jpg', '../../src/assets/img/tab/80262ba5cfea6d22408daa472bd763d8.jpg', '1');
INSERT INTO `tab` VALUES ('tabId10', '磨牙洁齿', '../../src/assets/img/tab/11925baaf6652097eea5a9f6b996c21a.jpg', '../../src/assets/img/tab/64fa517cacede8407ecbbbef778bf1c1.jpg', '4');
INSERT INTO `tab` VALUES ('tabId11', '罐头点心', '../../src/assets/img/tab/cbeb0b8c34a3458cd2a70335ea9a25bb.jpg', '../../src/assets/img/tab/6d7cc714bf86ec21b340cd53eb531cf5.jpg', '4');
INSERT INTO `tab` VALUES ('tabId12', '玩具', '../../src/assets/img/tab/f0d09b22a156c6c2c44d39c9596c30b3.jpg', '../../src/assets/img/tab/b163875bcefa76c455740f4a0940c88c.jpg', '4');
INSERT INTO `tab` VALUES ('tabId13', '牵引', '../../src/assets/img/tab/afe12a6f960ed317ea6403669607b9b6.jpg', '../../src/assets/img/tab/31a404fa764528b2c652ea1c9b58ddf5.jpg', '5');
INSERT INTO `tab` VALUES ('tabId14', '外出', '../../src/assets/img/tab/c1574df0b2578ed6321cb0280af793ed.jpg', '../../src/assets/img/tab/f2b583ec2de1c3f66e13881b35ffabf3.jpg', '5');
INSERT INTO `tab` VALUES ('tabId15', '餐具', '../../src/assets/img/tab/9b5eb8eccf2afc5f25f511f18e5417c1.jpg', '../../src/assets/img/tab/cd6019b4fed7a716f7fd90ed24a1644c.jpg', '5');
INSERT INTO `tab` VALUES ('tabId16', '清洁', '../../src/assets/img/tab/3e6884dc8bd65fb7ba7b600b40552f93.jpg', '../../src/assets/img/tab/be673e294a1d6e65969364f9c3b45208.jpg', '5');
INSERT INTO `tab` VALUES ('tabId17', '皮毛护理', '../../src/assets/img/tab/5ad03860ecd08eac939b680d3dda41b4.jpg', '../../src/assets/img/tab/dad12369b1dd85330c2523a54823caaf.jpg', '6');
INSERT INTO `tab` VALUES ('tabId18', '梳剪工具', '../../src/assets/img/tab/e465fcc34b25a0707f71f5f30f62ecf4.jpg', '../../src/assets/img/tab/c9ed3f405e45793761f7f0fec3d1c68f.jpg', '6');
INSERT INTO `tab` VALUES ('tabId19', '洗澡工具', '../../src/assets/img/tab/95f9b38e16d6db7ad6216da6151607e0.jpg', '../../src/assets/img/tab/c072b0097463addc88b6443dff3e75b6.jpg', '6');
INSERT INTO `tab` VALUES ('tabId2', '进口主粮', '../../src/assets/img/tab/562c15b9f8f53988959d97d47d63b1a7.jpg', '../../src/assets/img/tab/f500a1d8b9c334b0be55a349f04b0bec.jpg', '1');
INSERT INTO `tab` VALUES ('tabId20', '日常香波', '../../src/assets/img/tab/9cac25e15f9cd0e0b8124973042a05ce.jpg', '../../src/assets/img/tab/8393ccc7fa86801c8e1f3d818eae1b16.jpg', '6');
INSERT INTO `tab` VALUES ('tabId3', '单斤价格', '../../src/assets/img/tab/9227a22394215f9572d3bea2fe1699d4.jpg', '../../src/assets/img/tab/9063225106d67e2cd05167f71ff6e7cc.jpg', '1');
INSERT INTO `tab` VALUES ('tabId4', '口味配方', '../../src/assets/img/tab/5bb670292c914709995b7f59d83b1617.jpg', '../../src/assets/img/tab/9cd38109100b17000abea371addcb1b0.jpg', '1');
INSERT INTO `tab` VALUES ('tabId5', '全面护理', '../../src/assets/img/tab/5e09f838e5ffdc9e06f69958b975ac5d.jpg', '../../src/assets/img/tab/9e6636406dbf0fc26adbc0265a475f44.png', '3');
INSERT INTO `tab` VALUES ('tabId6', '常见疾病', '../../src/assets/img/tab/81ab1f639c99c1f5bbda88dbc01d9e19.jpg', '../../src/assets/img/tab/9e39ba2a342f219a7c9f6e2bd4b0bf94.jpg', '3');
INSERT INTO `tab` VALUES ('tabId7', '皮肤病', '../../src/assets/img/tab/cb1bb7838e96db46b752f2fa2e38dd28.jpg', '../../src/assets/img/tab/7b95ecc16b79c754fac45937ce6c9f1a.jpg', '3');
INSERT INTO `tab` VALUES ('tabId8', '驱虫', '../../src/assets/img/tab/ae6f576fea67f9cb95b9722a7f1c84d3.jpg', '../../src/assets/img/tab/a989abf7539cba044851318ab4be56be.jpg', '3');
INSERT INTO `tab` VALUES ('tabId9', '肉质零食', '../../src/assets/img/tab/3ddeae131c66d1e9d02be2f5450fb7a6.jpg', '../../src/assets/img/tab/c67461295c342aa9e30c3e1bbe1b07e5.jpg', '4');

-- ----------------------------
-- Table structure for ugfood
-- ----------------------------
DROP TABLE IF EXISTS `ugfood`;
CREATE TABLE `ugfood` (
  `ugfoodid` int(50) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '0',
  `curprice` varchar(255) NOT NULL DEFAULT '0',
  `oriprice` varchar(255) NOT NULL DEFAULT '0',
  `imgurl` varchar(255) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ugfoodid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ugfood
-- ----------------------------
INSERT INTO `ugfood` VALUES ('1', '优基 益生菌小型幼犬粮 2kg', '52.80', '88.00', '../src/assets/img/navList/5343975fb85a2ea2f2e9e6a8d757a9ab.jpg');
INSERT INTO `ugfood` VALUES ('2', '优基 益生菌小型成犬粮 2kg', '51.00', '85.00', '../src/assets/img/navList/a0ecf1f35cf851489d7123226dca8ab7.jpg');
INSERT INTO `ugfood` VALUES ('3', '优基 益生菌中大型幼犬粮 2kg', '52.80', '88.00', '../src/assets/img/navList/7ecd99e1c4b4b313ff866a22d4a1e4df.jpg');
INSERT INTO `ugfood` VALUES ('4', '优基 金枪鱼蛋黄能量果 贵宾犬幼犬粮 1.5kg', '106.25', '125.00', '../src/assets/img/navList/52724f796f78480def84f26b35cee0e8.png');
INSERT INTO `ugfood` VALUES ('5', '优基 无谷低敏 小型犬幼犬粮 10kg', '327.25', '385.00', '../src/assets/img/navList/e4fcb007e15d895fc0a454a30a4138a8.png');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `userId` int(255) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `gender` varchar(255) DEFAULT NULL COMMENT '性别',
  `userName` varchar(255) DEFAULT NULL COMMENT '用户名',
  `nickName` varchar(255) DEFAULT NULL COMMENT '昵称',
  `password` varchar(255) NOT NULL COMMENT '密码',
  `phone` varchar(255) NOT NULL,
  `pet` varchar(255) DEFAULT NULL COMMENT '宠物种类',
  `headeImg` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL COMMENT '头像',
  `carId` int(100) unsigned zerofill DEFAULT NULL COMMENT '购物车id',
  `time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '时间',
  PRIMARY KEY (`userId`)
) ENGINE=MyISAM AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('2', '', '我本有情12318', '娃哈哈', 'aaa', '17703037341', '', '../../src/assets/img/headImg/20180208024615_692.png', null, '2018-02-08 18:08:41');
INSERT INTO `user` VALUES ('1', null, '无情', null, '4297f44b13955235245b2497399d7a93', '13212312312', null, '../../src/assets/img/my/headImg/20180119111719_400.jpg', null, '2018-01-25 14:44:21');
INSERT INTO `user` VALUES ('3', null, '你个贱货', null, '4297f44b13955235245b2497399d7a93', '13212312313', null, '../../src/assets/img/my/headImg/20180119111719_400.jpg', null, '2018-01-25 14:44:26');
INSERT INTO `user` VALUES ('4', null, '相濡以沫', null, '4297f44b13955235245b2497399d7a93', '13312312312', null, '../../src/assets/img/my/headImg/20180119111719_400.jpg', null, '2018-01-25 14:44:29');
INSERT INTO `user` VALUES ('6', null, '倚梅看雪', null, '4297f44b13955235245b2497399d7a93', '13312312311', null, '../../src/assets/img/my/headImg/20180119111719_400.jpg', null, '2018-01-24 19:52:04');
INSERT INTO `user` VALUES ('7', null, '浅夏未至', null, '4297f44b13955235245b2497399d7a93', '13412312311', null, '../../src/assets/img/my/headImg/20180119111719_400.jpg', null, '2018-01-24 19:52:04');
INSERT INTO `user` VALUES ('8', null, '仅限观赏', null, '8b353d5cc07e13577608711f4602fcb7', '13412312333', null, '../../src/assets/img/my/headImg/20180119111719_400.jpg', null, '2018-01-24 19:52:04');
INSERT INTO `user` VALUES ('10', null, '傻B中的战斗机', null, '4297f44b13955235245b2497399d7a93', '15212312312', null, '../../src/assets/img/my/headImg/20180119111719_400.jpg', null, '2018-01-24 19:52:04');
INSERT INTO `user` VALUES ('11', null, '热血愤青', null, '4297f44b13955235245b2497399d7a93', '13812312311', null, '../../src/assets/img/my/headImg/20180119111719_400.jpg', null, '2018-01-24 19:52:04');
INSERT INTO `user` VALUES ('12', null, '忘得洒脱', null, '4297f44b13955235245b2497399d7a93', '13512312312', null, '../../src/assets/img/my/headImg/20180119111719_400.jpg', null, '2018-01-24 19:52:04');
INSERT INTO `user` VALUES ('13', null, '小二货', null, '4297f44b13955235245b2497399d7a93', '13312312314', null, '../../src/assets/img/my/headImg/20180119111719_400.jpg', null, '2018-01-24 19:52:04');
INSERT INTO `user` VALUES ('14', null, '惑形人', null, '4297f44b13955235245b2497399d7a93', '13613212312', null, '../../src/assets/img/my/headImg/20180119111719_400.jpg', null, '2018-01-24 19:52:04');
INSERT INTO `user` VALUES ('15', null, '晚街听风', null, '4297f44b13955235245b2497399d7a93', '13712312312', null, '../../src/assets/img/my/headImg/20180119111719_400.jpg', null, '2018-01-24 19:52:04');
INSERT INTO `user` VALUES ('16', null, '黑猫墓地', null, '4297f44b13955235245b2497399d7a93', '13312312366', null, '../../src/assets/img/my/headImg/20180119111719_400.jpg', null, '2018-01-24 19:52:04');
INSERT INTO `user` VALUES ('17', null, '要死趁早', null, '4297f44b13955235245b2497399d7a93', '13412312312', null, '../../src/assets/img/my/headImg/20180119111719_400.jpg', null, '2018-01-24 19:52:04');
INSERT INTO `user` VALUES ('18', null, '珍藏版_', null, '4297f44b13955235245b2497399d7a93', '13512312319', null, '../../src/assets/img/my/headImg/20180119111719_400.jpg', null, '2018-01-24 19:52:04');
INSERT INTO `user` VALUES ('19', null, '女中王', null, '4297f44b13955235245b2497399d7a93', '13812312312', null, '../../src/assets/img/my/headImg/20180119111719_400.jpg', null, '2018-01-24 19:52:04');
INSERT INTO `user` VALUES ('20', null, '半城雨', null, '4297f44b13955235245b2497399d7a93', '15801231231', null, '../../src/assets/img/my/headImg/20180119111719_400.jpg', null, '2018-01-24 19:52:04');
INSERT INTO `user` VALUES ('41', null, null, null, '12qwerqww', '185 7736 3440', null, null, null, '2018-02-06 14:30:00');
INSERT INTO `user` VALUES ('42', '女', '娃哈哈', '半城雪', '123', '111', '贵宾犬', '../../src/assets/img/headImg/20180207023120_656.png', null, '2018-02-07 19:41:27');
INSERT INTO `user` VALUES ('28', null, 'haha', null, '698d51a19d8a121ce581499d7b701668', '17703037342', null, '../../src/assets/img/my/default.jpg', null, '2018-02-08 17:14:37');
INSERT INTO `user` VALUES ('50', null, null, null, '12345678', '18218661437', null, null, null, '2018-02-09 14:17:17');
INSERT INTO `user` VALUES ('49', null, null, null, '12345678', '13420171027', null, null, null, '2018-02-09 14:14:05');
INSERT INTO `user` VALUES ('47', null, null, null, '12345678', '15277974906', null, null, null, '2018-02-09 12:27:47');
INSERT INTO `user` VALUES ('48', '男', 'lm', '666', '12345678', '18620154961', '哈士奇', '../../src/assets/img/headImg/20180209061816_416.jpg', null, '2018-02-09 14:20:37');
SET FOREIGN_KEY_CHECKS=1;
