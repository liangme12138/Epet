import React from 'react';
import './fake.scss'

export default class FakeComponent extends React.Component {
    state = {
    
    }
    componentWillMount() {
        
    }
    back(){
        window.history.back();
    }
    render() {
        return (
            <div className="specialist">
                <div className="specialist-top">
                    <i className="iconfont icon-back" onClick={this.back}></i>
                    <h2>你不知道的天衡宝假货</h2>
                    <i className="iconfont icon-viewgallery"></i>
                </div>
                <div className="specialist-bottom">
                    <div className="banner">
                        <img src="../../src/assets/img/specialist/0f4078587d2523c1b8f357c5410496d0.jpg"/>
                    </div>
                    <div className="details">
                        <div className="details_pbmun">
                            <span><i className="iconfont icon-good"></i>67</span>
                            <span><i className="iconfont icon-toys"></i>29351</span>
                            <span><i className="iconfont icon-favoritesfilling"></i>33</span>
                        </div>
                        <div className="details_author">
                            <img src="../../src/assets/img/specialist/e08a3067571abad5761c54f760d35d64.jpg"/>
                            <div className="author_info">
                                <p>全国执业兽医师·E博士</p>
                                <p>微信：头号宠物</p>
                            </div>
                        </div>
                        <div className="con_text">
                            <p>
                                天衡宝狗粮大伙都喜欢，有些国内不法商家就罔顾法律，导致假货山寨货满天飞，据知情人士透露，山寨假货“雪山狗粮”一年有3000万的销量，这么大量你是不是一不小心也中招了呢？
                            </p>
                            <p> “鸭肉土豆配方”是天衡宝狗粮中最受欢迎的，所以也是假货的重灾区，很多狗粮打着鸭肉配方的旗号，可原料就跟产品说明相差甚远了。鸭肉土豆配方属于天衡宝Limited Ingredient Diets(L.I.D)系列，意思是“限定饮食成分”。这一系列的狗粮是用料非常简单且有针对性，能够提供均衡且高质量的营养，但是又避免因为原料的复杂导致狗狗过敏，鸭肉土豆配方是这个系列的翘楚，因为很好的低敏性，尤其适合过敏体质、肥胖、肠胃消化不好、泪痕严重的狗狗。假货有可能会含有会使狗狗过敏的成分，加上大量劣质原料及植物蛋白会导致狗狗持续软便、泪痕加重、皮肤瘙痒等问题出现。</p>
                            <p>
                                小编在市面上购买了天衡宝鸭肉土豆配方的狗粮，给大家对比看看，真假货有哪些不一样。
                            </p>
                            <span>首先看外包装</span>
                            <div className="img">
                                <img src="../../src/assets/img/specialist/6cbb4fa5eefc14107c9c6dc9fcf3117f.jpg" />
                            </div>
                            <span>保质期印刷方式也不一样</span>
                            <div className="img">
                                <img src="../../src/assets/img/specialist/2cf4c550b3df6e366b60712df0680638.jpg" />
                            </div>
                            <div className="img">
                                <img src="../../src/assets/img/specialist/a314f89718c3eb86b3ca34485d2f5eba.gif" />
                            </div>
                            <span>内容物更是相去甚远</span>
                            <div className="img">
                                <img src="../../src/assets/img/specialist/7af1a87ede5e13db6d1fa48053790411.jpg" />
                            </div>
                            <span>这么简单就能辨别真假狗粮吗？NONONO~</span>
                            <p>
                                很多粑粑麻麻会想根据颗粒的大小、油脂状态、泡软程度来确认是否是假货，但是这个方法除非是真假狗粮对比分析才能做到，单单从这些因素分析是不靠谱的。而且你以为黑心商贩就这点小聪明吗？那你就太小瞧他们了，为了更逼真，他们还会真假掺着卖、自制防伪标、收购临期库存狗粮，更改生产日期后再卖出，这些仅凭铲屎官一己之力基本上无法辨别真假的。
                            </p>
                            <span>那些年被证明不靠谱的辨假方法大揭秘</span>
                            <span>泡水法——NG</span>
                            <p>
                                狗粮是工艺比较复杂的产品，泡水后呈现的状态也会因为狗粮的原料、批次不一样而略有差异，连狗粮厂家都只能判断大致的指标范围，不能保证每批产品一模一样，用泡水法来辨别真假狗粮，可是图样图森破！
                            </p>
                            <span>白纸渗油法——NG</span>
                            <p>
                                有些铲屎官说卡比正品表面都比较干，假货则很油。不过，狗粮的最后一道工序一般是喷涂油脂，做干一点也就是少喷点油，这不难呀！你懂的，做得不好的都是不走心的假货。 
                            </p>
                            <span>颗粒对比法——NG</span>
                            <p>
                                狗粮的颗粒塑形是靠模具，要想做出跟正品一模一样的颗粒，无非是把模具和出料的速度调整一下。所以，如果仅凭颗粒区别来辨认假货，非常不靠谱。
                                这里小编顺便给各位粑粑麻麻科普一下关于不同批次狗粮颗粒大小和颜色的问题：
                                颗粒大小：一般好的天然粮的含肉量比商品粮要高，在天然粮的切割和烘焙的过程中各个颗粒的形状和大小因此无法保证一致(好比拿烤羊肉做比方，即使同样形状的羊肉，放到火烤后，形状仍然保持一样的可能性也非常非常低)。一般狗粮里为了降低成本，提高蛋白质的比重，会添加玉米、小麦等谷类成分(这些来源的蛋白质是不容易被宠物代谢的)，这里面含有淀粉，因此颗粒的成型性就可以很好的保持。
                            </p>
                            <p>狗粮颜色：天然狗粮的原料是纯肉、蔬菜和天然的草本植物，不添加任何色素，因此颜色取决于肉和草本植物，而每个季节每个区域的草本植物颜色有可能不一样，因此狗粮的颜色就不会像添加色素的狗粮那般均匀。</p>
                            <span>正规渠道购买才是王道</span>
                            <p>市面上这么多假货，如何才能火眼金睛辨别真假呢，其实最保险的方法是直接找到靠谱的渠道购买。 进入品牌官网，找到Where to Buy的按钮，会有国际分销商的名单，只要在国际分销商内的就一定是正规代理商，不在名单之列的就是冒名代理了。 官网披露的分销商都有邮箱，铲屎官只用发送邮件核查你购买的店铺是否是从分销商进货即可。 目前China Merchants Foods Co., Ltd.是美国Natural Balance公司唯一授权的合法中国代理，而E宠商城是China Merchants Foods Co., Ltd.在中国地区B2C战略合作伙伴，大家完全可以放心购买啦！</p>
                            <p>认准天衡宝防伪标</p>
                            <div className="img">
                                <img src="../../src/assets/img/specialist/f207e07e0823e36b847552b46b7ea807.jpg" />
                            </div>
                            <p>天衡宝本着要么不做，要做就做最好的原则，在产品把控上面非常严格，质量可是杠杠的！那品质甩出假货山寨货几条街！</p>
                            <p>坚持质量致胜的理念</p>
                            <p>
                                美国Natural Balance公司公司建立于1989年，是美国五大上市食品公司Smuker公司旗下的品牌，目前市值170亿美元，秉承着Food For a Life time（终身食用）和Buy With Confidence（放心购买）两大“为人民服务”的理念，致力于提供给宠物最出色的健康产品。天衡宝是世界各地兽医、狗舍以及追求品质养宠的铲屎官们都在使用的产品。年年登上WDJ，更是美国军犬的专用口粮，其质量和适口性在一直北美名列前5。
                            </p>
                            <p>
                                美国Natural Balance公司公司建立于1989年，是美国五大上市食品公司Smuker公司旗下的品牌，目前市值170亿美元，秉承着Food For a Life time（终身食用）和Buy With Confidence（放心购买）两大“为人民服务”的理念，致力于提供给宠物最出色的健康产品。天衡宝是世界各地兽医、狗舍以及追求品质养宠的铲屎官们都在使用的产品。年年登上WDJ，更是美国军犬的专用口粮，其质量和适口性在一直北美名列前5。
                            </p>
                            <p>
                                为铲屎官把好质量关
                            </p>
                            <p>为了保证狗狗放心食用，天衡宝每批狗粮在配送前都会进行9种已知污染物的检测，确保客户可以享受Buy with Confidence（放心购买）的服务。</p>
                            <p>
                                每一颗狗粮都会接受严格的出厂检测
                            </p>
                            <p>
                                检测内容包括黄曲霉毒素、DON（呕吐毒素）、赫曲霉素、玉米烯酮（ZEA）、伏马菌素、大肠杆菌、沙门氏菌、三聚氰胺和氰尿酸等污染物。所有检测由Midwest Laboratories(中西部实验室)完成。该实验室成立于1975年，迄今已经在检测领域服务了40年之久，拥有丰富的农产品检验经验。 实验室具有权威资质，得到多个官方许可和第三方认证： AOAC international（国际公职分析化学师协会）， AOAC Research Institute（美国公职分析化学师协会研究所）， IUPAC（国际理论和应用化学联合会）， USDA/GIPSA（FIGIS）（美国农业部/谷物检验、批发及畜牧场管理局(联邦谷物检验署)）， USDA/DSIS（美国农业部/食品安全监督服务局）。
                            </p>
                            <p>正品狗粮都有相应检测证书</p>
                            <div className="img">
                                <img src="../../src/assets/img/specialist/bc4242c3b30561c65f9fa9213107ff51.jpg" />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
