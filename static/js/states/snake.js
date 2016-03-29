require([], function() {
    var canvas = document.getElementById("snakeCanvas");
    var ctx = canvas.getContext("2d"); //画笔
    var width = 16;
    //移动速度
    var speed = 100;
    //计分
    /*计分规则：蛇身每增加一节，分数加10，在吃到下一个食物前每改变一次方向，减一分*/
    var score = 0;
    document.getElementById('result').value = score;

    //蛇的身体
    var snake = [];
    //指定初始长度为6
    var snakelen = 6;
    //初始化
    for (var i = 0; i < snakelen; i++) {
        snake[i] = new Cell(i, 0, -1);
    }
    var head = snake[snakelen - 1];
    //蛇的身体构成的元素，x坐标，y坐标，d方向：1左 -1右 2上 -2下
    function Cell(x, y, d) {
            this.x = x;
            this.y = y;
            this.d = d;
            return this;
        }
        //食物对象
    function Food(x, y) {
            this.x = x;
            this.y = y;
            return this;
        }
        //初始食物的出现位置
    var foodX = Math.ceil(Math.random() * 28 + 1);
    var foodY = Math.ceil(Math.random() * 28 + 1);
    //定义食物
    var food = new Food(foodX, foodY);
    //绘制游戏基本元素
    function draw() {
            //清空整个画布
            ctx.clearRect(0, 0, 480, 480);
            //绘制网格
            for (var i = 0; i < 30; i++) {

                ctx.strokeStyle = "rgba(112,112,112,0.3)"; //线条颜色
                ctx.beginPath();

                //绘制横线
                ctx.moveTo(0, i * width);
                ctx.lineTo(480, i * width);

                //绘制竖线
                ctx.moveTo(i * width, 0);
                ctx.lineTo(i * width, 480);

                ctx.closePath();
                ctx.stroke();
            }

            //绘制蛇的身体
            for (var i = 0; i < snake.length; i++) {
                ctx.fillStyle = "#333"; //填充颜色
                //蛇的头部
                if (i == snake.length - 1) {
                    ctx.fillStyle = "#333";
                }
                ctx.beginPath();
                ctx.rect(snake[i].x * width, snake[i].y * width, width, width);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
            //绘制食物
            drawFood();

            //判断是否吃到食物
            if (head.x == food.x && head.y == food.y) {

                //增加蛇身的长度

                var newCell = new Cell(food.x, food.y, head.d);
                snake[snake.length] = newCell;
                head = newCell;

                //随机产生一个食物
                initFood();
                food = new Food(foodX, foodY);
                drawFood();

                score = score + 10;
                document.getElementById('result').value = score;

            }
        }
        //初始化食物的x,y坐标，随机位置
    function initFood() {
            //Math.random()返回一个0-1之间的随机数
            //Math.ceil()向上取整
            foodX = Math.ceil(Math.random() * 28 + 1);
            foodY = Math.ceil(Math.random() * 28 + 1);
            //判断是否跟蛇的身体有重叠
            for (var i = 0; i < snake.length; i++) {
                if (snake[i].x == foodX && snake[i].y == foodY) {
                    initFood(); //递归产生食物坐标
                }
            }
        }
        //绘制食物
    function drawFood() {
        ctx.fillStyle = "#333";
        ctx.beginPath();
        ctx.rect(food.x * width, food.y * width, width, width);
        ctx.closePath();
        ctx.fill();
    }

    draw();
    //监听键盘的事件
    document.onkeydown = function(e) {
        //keyCode 上38下40左37右39
        //W87 S83 A65 D68
        var keyCode = e.keyCode;
        var direction;
        //alert(keyCode);                
        switch (keyCode) {
            case 38:
            case 87:
                direction = 2;
                break; //上
            case 40:
            case 83:
                direction = -2;
                break; //下
            case 37:
            case 65:
                direction = 1;
                break; //左
            case 39:
            case 68:
                direction = -1;
                break; //右

            default:
                break;
        }
        //控制蛇的移动方向
        if (head.d + direction != 0 && (keyCode == 37 || keyCode == 38 || keyCode == 39 || keyCode == 40 || keyCode == 65 || keyCode == 68 || keyCode == 83 || keyCode == 87)) {
            if (head.d != direction) {
                document.getElementById('result').value = score;
            }
            moveSnake(direction);

        }
    }

    //移动蛇的方法
    function moveSnake(direction) {
            var newSnake = [];
            var newCell = new Cell(head.x, head.y, head.d);
            //循环除开头以外的身体部分
            for (var i = 0; i < snake.length; i++) {
                newSnake[i - 1] = snake[i]
            }
            newSnake[snake.length - 1] = newCell;
            newCell.d = direction;

            switch (direction) {
                case 2:
                    newCell.y--;
                    break; //上
                case -2:
                    newCell.y++;
                    break; //下
                case 1:
                    newCell.x--;
                    break; //左
                case -1:
                    newCell.x++;
                    break; //右
            }

            snake = newSnake;
            head = snake[snake.length - 1];
            checkDeath();
            draw();

        }
        //自动移动
    function moveClock() {
        moveSnake(head.d);
    }

    setInterval(moveClock, speed);

    //判断游戏是否结束
    function checkDeath() {
        //判断是否出边界
        if (head.x >= 30 || head.y >= 30 || head.x < 0 || head.y < 0) {
            alert("很遗憾，您输了！" + "\n" + "您的得分为：" + "\n" + score);
            window.location.reload();
        }
        //判断是否碰到自己
        for (var i = 0; i < snake.length - 2; i++) {
            if (head.x == snake[i].x && head.y == snake[i].y) {
                alert("很遗憾，您输了！" + "\n" + "您的得分为：" + "\n" + score);
                window.location.reload();
            }
        }
    }
})
