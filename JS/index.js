(function(){
    var games = {
        $:function(ele){
            return document.querySelectorAll(ele);
        },
        //头部导航banner的js
        "bannerSlider":function(){
            //头部导航点击按钮
            var gameBtn = this.$('.game-btn')[0];
            var gameList = this.$('.game-list')[0];
            var bannerGameList = this.$('.banner-game-list')[0];
            //头部导航文字
            var gameListText = this.$('.game-list-text')[0];
            //点击收起按钮
            var gameListFooter = this.$('.banner-game-list-footer')[0];
            var footer = gameListFooter.children[0];

            var needIndex = 0;
            
            gameBtn.onclick = function(){
                needIndex++;
                if(needIndex%2==1){
                    gameListText.style.display = 'none';
                }
                else{
                    gameListText.style.display = 'block';
                }
                
                gameList.classList.toggle('game-listActive');
                bannerGameList.classList.toggle('show');
            };

            footer.onclick = function(){
                needIndex = 0;
                gameListText.style.display = 'block';
                gameList.classList.toggle('game-listActive');
                bannerGameList.classList.toggle('show');
            };
        },

        //banner新闻面板模块
        'bannerTabs':function(){
            var allBtn = this.$('.click-list li');
            var allLi = this.$('.banner-list-one');
            var zIndex = 5;

            var timer = null;
            var index = 0;

            var bannerArr = [
                {
                    'name_text':'漫威超级战争',
                    'title_text':'灭霸卷土重来',
                    'bg':'IMAGE/bb351359-e561-4e5b-9041-96f42a6fb75d.jpeg'
                },
                {
                    'name_text':'游戏点卡旗舰店',
                    'title_text':'网易入驻淘宝天猫',
                    'bg':'IMAGE/17c5610b-b620-4849-84eb-13c30edeec08.jpeg'
                },
                {
                    'name_text':'《零号人物》',
                    'title_text':'2v4手游对抗抢险',
                    'bg':'IMAGE/b44514e7-2e31-4567-8e75-2b9ea9583e4e.jpeg'
                },
                {
                    'name_text':'宝可梦最新剧场',
                    'title_text':'影游联动开启',
                    'bg':'IMAGE/bca3d7d2-79f8-4ba1-b624-740f15d55718.jpeg'
                },
                {
                    'name_text':'哈利波特：魔法',
                    'title_text':'全平台正式上线',
                    'bg':'IMAGE/fb2c2ca9-1c42-46a5-a3a0-538d2058a387.jpeg'
                }
            ]
            var bannerLastBtn = this.$('.banner-last')[0];
            var bannerNextBtn = this.$('.banner-next')[0];

            bannerLastBtn.onclick = function(){
                index--;
                if(index == -1){
                    index = allBtn.length-1; 
                };
                for(var i = 0;i < allBtn.length;i++){
                    allBtn[i].classList.remove('active');
                    allLi[i].classList.remove('active');
                };
                allBtn[index].classList.add('active');
                allLi[index].classList.add('active');
                bannerLastBtn.onmouseenter();
                startTabs();
            };
            bannerLastBtn.onmouseenter = function(){
                var last = index-1;
                if(last == -1){
                    last = allBtn.length - 1;
                };
                this.children[0].children[0].style.backgroundImage = 'url('+bannerArr[last].bg+')';
                this.children[0].children[1].innerHTML = bannerArr[last].name_text;
                this.children[0].children[2].innerHTML = bannerArr[last].title_text;
            };

            bannerNextBtn.onclick = function(){
                index++;
                if(index == allBtn.length){
                    index = 0;
                }
                for(var i = 0;i < allBtn.length;i++){
                    allBtn[i].classList.remove('active');
                    allLi[i].classList.remove('active');
                };
                allBtn[index].classList.add('active');
                allLi[index].classList.add('active');
                bannerNextBtn.onmouseenter();
                startTabs();
            };
            bannerNextBtn.onmouseenter = function(){
                var next = index + 1;
                if(next == allBtn.length){
                    next = 0;
                };
                this.children[0].children[0].style.backgroundImage = 'url('+bannerArr[next].bg+')';
                this.children[0].children[1].innerHTML = bannerArr[next].name_text;
                this.children[0].children[2].innerHTML = bannerArr[next].title_text;
            };
            for(var i = 0;i < allLi.length;i++){
                allLi[i].style.zIndex = zIndex;
                zIndex--;
            };
            for(var i = 0;i < allBtn.length;i++){
                allBtn[i].index = i;
                allBtn[i].onclick = function(){
                    for(var k = 0;k < allBtn.length;k++){
                        allLi[k].classList.remove('active');
                        allBtn[k].classList.remove('active');
                    };
                    this.classList.add('active');
                    allLi[this.index].classList.add('active');
                    index = this.index;  //让定时器从当前index值位置开始执行
                    startTabs();
                };
            };
            startTabs();
            function startTabs(){
                clearInterval(timer);
                timer = setInterval(function(){
                    index++;
                    if(index == allLi.length){
                        index = 0;
                    }
                    for(var k = 0;k < allBtn.length;k++){
                        allLi[k].classList.remove('active');
                        allBtn[k].classList.remove('active');
                    };
                    allBtn[index].classList.add('active');
                    allLi[index].classList.add('active');
                },5000);
            }
        },

        "bannerNewsTabs":function(){
            var allBannerNewsLi = this.$('.banner .banner-news .banner-news-games li');
            var allShowLi = this.$('.banner-news-image li');
            var zIndex = 5;

            for(var i = 0;i < allShowLi.length;i++){
                allShowLi[i].style.zIndex = zIndex;
                zIndex--;
            };

            for(var i = 0;i < allBannerNewsLi.length;i++){
                allBannerNewsLi[i].index = i;
                allBannerNewsLi[i].onclick = function(){
                    for(var k = 0;k < allBannerNewsLi.length;k++){
                        allBannerNewsLi[k].classList.remove('active');
                        allShowLi[k].classList.remove('active');
                    };
                    this.classList.add('active');
                    allShowLi[this.index].classList.add('active');
                };
            };
        },

        //官方社群轮播模块
        'addAssociation':function(){
            //需要轮播的ul
            var needUl = this.$('.group-content-node-left-center-ul')[0];
            //创建镜像
            needUl.innerHTML += needUl.innerHTML;
            //需要触碰效果的li
            var allLi = this.$('.group-content .group-content-node .group-content-node-left .group-content-node-left-center .group-content-node-left-center-ul >li >ol >li');
            //左侧的按钮
            var lastBtn = this.$('.group-content-node-left-last')[0];
            //右侧的按钮
            var nextBtn = this.$('.group-content-node-left-next')[0];
            //特殊宽度
            var needWidth = 162;

            //无限循环点击
            var index = 0;
            var leftWidth = needUl.children[0].offsetWidth;
            var b = true;

            //定时自动轮巡播放
            var timer = null;
            var groupContentNodeLeft = this.$('.group-content-node-left')[0];

            //设定轮播模块的宽度
            needUl.style.width = needUl.children[0].offsetWidth * needUl.children.length + 'px';

            lastBtn.onclick = function(){
                if(!b)return;
                b = false;
                if(index == 0){
                    needUl.style.transition = '0s';
                    needUl.style.left = (-3 * leftWidth) - needWidth + 'px';
                    setTimeout(function(){
                        needUl.style.transition = '1s';
                        index = -2;
                        needUl.style.left = leftWidth * index + 'px';
                    },10);
                }
                else{
                    if(index == -3){
                        index = -1; 
                    }
                    
                    else{
                        index++;
                    }
                    needUl.style.left = leftWidth * index + 'px';
                }
                //定时器开关，防止用户快速点击
                setTimeout(function(){
                    b = true;
                },1200);
                for(var i = 0;i < allLi.length;i++){
                    allLi[i].classList.remove('active');
                }
            };

            nextBtn.onclick = function(){
                if(!b)return;
                b = false;
                index--;
                if(index == -3){
                    needUl.style.left = leftWidth * (index + 1) - needWidth + 'px';
                }
                else if(index == -4){
                    needUl.style.left = leftWidth * (index + 1) - needWidth + 'px';
                    index = 0;
                    setTimeout(function(){
                        needUl.style.transition = '0s';
                        setTimeout(function(){
                            needUl.style.left = 0;
                            setTimeout(function(){
                                needUl.style.transition = '1s';
                            },100);
                        },10);
                    },1010);
                }
                else{
                    needUl.style.left = leftWidth * index + 'px';
                };
                //定时器开关，防止用户快速点击
                setTimeout(function(){
                    b = true;
                },1200);
                for(var i = 0;i < allLi.length;i++){
                    allLi[i].classList.remove('active');
                }
            };

            //定时自动轮巡播放
            clearInterval(timer);
            timer = setInterval(nextBtn.onclick,5000);
            groupContentNodeLeft.onmouseenter = function(){
                clearInterval(timer);
            };
            groupContentNodeLeft.onmouseleave = function(){
                clearInterval(timer);
                timer = setInterval(nextBtn.onclick,5000);
            };

            for(var i = 0;i < allLi.length;i++){
                allLi[i].onmouseenter = function(){
                    for(var k = 0;k < allLi.length;k++){
                        allLi[k].classList.remove('active');
                    };
                    this.classList.add('active');
                };
            };
        },

        //热门游戏
        "hotGamesChange":function(){
            var turnAround = this.$('.turnAround')[0];
            var allLi = this.$('.Games .hotGames .listGames .listGames-li');
            var index = 6;
            var bl = false;
            var changeArr = [
                {
                    'ewm':'IMAGE/games_ewn.png',
                    'title':'游戏类型：童话MMO手游',
                    'img':'IMAGE/game-list-img.png',
                    'name':'《游戏王：决斗链接》',
                    'showTitle':'全新游戏王GX世界版本9月2号上线'
                },
                {
                    'ewm':'IMAGE/games_ewn.png',
                    'title':'游戏类型：童话MMO手游',
                    'img':'IMAGE/game-list-img.png',
                    'name':'《游戏王：决斗链接》',
                    'showTitle':'全新游戏王GX世界版本9月2号上线'
                },
                {
                    'ewm':'IMAGE/games_ewn.png',
                    'title':'游戏类型：童话MMO手游',
                    'img':'IMAGE/game-list-img.png',
                    'name':'《游戏王：决斗链接》',
                    'showTitle':'全新游戏王GX世界版本9月2号上线'
                },
                {
                    'ewm':'IMAGE/games_ewn.png',
                    'title':'游戏类型：童话MMO手游',
                    'img':'IMAGE/game-list-img.png',
                    'name':'《游戏王：决斗链接》',
                    'showTitle':'全新游戏王GX世界版本9月2号上线'
                },
                {
                    'ewm':'IMAGE/games_ewn.png',
                    'title':'游戏类型：童话MMO手游',
                    'img':'IMAGE/game-list-img.png',
                    'name':'《游戏王：决斗链接》',
                    'showTitle':'全新游戏王GX世界版本9月2号上线'
                },
                {
                    'ewm':'IMAGE/games_ewn.png',
                    'title':'游戏类型：童话MMO手游',
                    'img':'IMAGE/game-list-img.png',
                    'name':'《游戏王：决斗链接》',
                    'showTitle':'全新游戏王GX世界版本9月2号上线'
                },
                {
                    'ewm':'IMAGE/games_ewn.png',
                    'title':'100抽参与周年活动',
                    'img':'IMAGE/14556651-311f-4e04-891c-b88dcc840798.jpeg',
                    'name':'《阴阳师：妖怪屋》',
                    'showTitle':'一周年庆开启，活动得100抽！SP赤影妖刀姬'
                },
                {
                    'ewm':'IMAGE/games_ewn.png',
                    'title':'100抽参与周年活动',
                    'img':'IMAGE/14556651-311f-4e04-891c-b88dcc840798.jpeg',
                    'name':'《阴阳师：妖怪屋》',
                    'showTitle':'一周年庆开启，活动得100抽！SP赤影妖刀姬'
                },
                {
                    'ewm':'IMAGE/games_ewn.png',
                    'title':'100抽参与周年活动',
                    'img':'IMAGE/14556651-311f-4e04-891c-b88dcc840798.jpeg',
                    'name':'《阴阳师：妖怪屋》',
                    'showTitle':'一周年庆开启，活动得100抽！SP赤影妖刀姬'
                },
                {
                    'ewm':'IMAGE/games_ewn.png',
                    'title':'100抽参与周年活动',
                    'img':'IMAGE/14556651-311f-4e04-891c-b88dcc840798.jpeg',
                    'name':'《阴阳师：妖怪屋》',
                    'showTitle':'一周年庆开启，活动得100抽！SP赤影妖刀姬'
                },
                {
                    'ewm':'IMAGE/games_ewn.png',
                    'title':'100抽参与周年活动',
                    'img':'IMAGE/14556651-311f-4e04-891c-b88dcc840798.jpeg',
                    'name':'《阴阳师：妖怪屋》',
                    'showTitle':'一周年庆开启，活动得100抽！SP赤影妖刀姬'
                },
                {
                    'ewm':'IMAGE/games_ewn.png',
                    'title':'决战平安京',
                    'img':'IMAGE/67ecf0ee-2ab0-433b-9eb8-ae1f826e8a59.jpeg',
                    'name':'《决战！平安京》',
                    'showTitle':'返校·稚语。剪刀石头布——我~出~锤！'
                },
                {
                    'ewm':'IMAGE/games_ewn.png',
                    'title':'决战平安京',
                    'img':'IMAGE/67ecf0ee-2ab0-433b-9eb8-ae1f826e8a59.jpeg',
                    'name':'《决战！平安京》',
                    'showTitle':'返校·稚语。剪刀石头布——我~出~锤！'
                },
                {
                    'ewm':'IMAGE/games_ewn.png',
                    'title':'决战平安京',
                    'img':'IMAGE/67ecf0ee-2ab0-433b-9eb8-ae1f826e8a59.jpeg',
                    'name':'《决战！平安京》',
                    'showTitle':'返校·稚语。剪刀石头布——我~出~锤！'
                },
                {
                    'ewm':'IMAGE/games_ewn.png',
                    'title':'决战平安京',
                    'img':'IMAGE/67ecf0ee-2ab0-433b-9eb8-ae1f826e8a59.jpeg',
                    'name':'《决战！平安京》',
                    'showTitle':'返校·稚语。剪刀石头布——我~出~锤！'
                },
                {
                    'ewm':'IMAGE/games_ewn.png',
                    'title':'决战平安京',
                    'img':'IMAGE/67ecf0ee-2ab0-433b-9eb8-ae1f826e8a59.jpeg',
                    'name':'《决战！平安京》',
                    'showTitle':'返校·稚语。剪刀石头布——我~出~锤！'
                }
            ]
            

            turnAround.onmousedown = function(){
                return false;
            };
            turnAround.onclick = function(){
                if(bl)return;
                bl = true;
                setTimeout(function(){
                    bl = false;
                },850);
                for(var i = 0;i < allLi.length;i++){
                    (function(i){
                        setTimeout(function(){
                            allLi[i].classList.add('scale');
                            setTimeout(function(){
                                if(index == changeArr.length){
                                    index = 0;
                                };
                                allLi[i].children[1].src = changeArr[index].img;
                                allLi[i].children[2].innerText = changeArr[index].name;
                                allLi[i].children[0].children[1].children[0].innerText = changeArr[index].title;
                                allLi[i].children[3].innerText = changeArr[index].showTitle;
                                index++;
                                allLi[i].classList.remove('scale');
                            },300);
                        },i*100);
                    })(i);
                };
            };
        },
        //查看更多
        "gamesLinksSlider":function(){
            var linksBtn = this.$('.hide-box .hide-box-center .hide-show-button')[0];
            var treeGamnes = this.$('.treeGamnes')[0];
            linksBtn.onclick = function(){
                if(this.innerText == '查看更多'){
                    this.innerText = '收起';
                    treeGamnes.classList.add('active');
                }
                else{
                    this.innerText = '查看更多';
                    treeGamnes.classList.remove('active');
                }
            }
            linksBtn.onmousedown = function(){
                return false;
            }
        }
    }

    //查看更多
    games.gamesLinksSlider();

    //热门游戏
    games.hotGamesChange();

    //官方社群轮播模块
    games.addAssociation();
    
    //bannernewsTabs
    games.bannerNewsTabs();

    //topNode
    games.bannerSlider();

    //banner
    games.bannerTabs();
})();

