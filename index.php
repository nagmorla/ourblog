<?php include("session_data.php"); ?>
<!DOCTYPE html>
<html>
    <head>
        <title><?php echo $blogtitle; ?></title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">-->
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>-->
        <!--<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>-->
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script type="text/javascript" src="js/knockout-3.5.0.js"></script>
        <!-- Favicon -->
        <link rel="shortcut icon" href="css/images/favicon.ico">

        <!-- Google Webfont -->
        <link href='http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900' rel='stylesheet' type='text/css'>	
        <link href='http://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,300italic,400italic' rel='stylesheet' type='text/css'>

        <!-- CSS -->
        <link rel="stylesheet" href="css/app.css">

        <script src='https://www.google.com/recaptcha/api.js'></script>
    </head>
    <body>
        <input type="hidden" id="login_user" name="login_user" value="<?= $username ?>"/>
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <!--<a class="navbar-brand" href="#">
                        //<?php echo $blogheading; ?>
                    </a>-->
                    <a class="navbar-brand" href="index.php"><img src="css/images/logo-color-1.png" style="    height: 100%;    width: 80%;"/></a>
                </div>
                <!--                <ul class="nav navbar-nav">
                                    <li class="active"><a data-toggle="tab" href="#home_div">Home</a></li>
                
                                    <li><a data-toggle="tab" href="#about_div">About Us</a></li>
                                </ul>-->
                <ul class="nav navbar-nav navbar-right">                    
                    <?php
                    if ($loginComplete == "1") {
                        ?>
                <!--                        <li><a href="#"><?php echo $username; ?></a></li>-->
                        <li><a href="#askQuestion">Ask Question</a></li>
                        <li style="margin-top: 8px;">
                            <div class="dropdown">
                                <button type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown">
                                    <span class="glyphicon glyphicon-user"></span> <?php echo $username; ?>
                                </button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Logout</a>
                                </div>
                            </div>
                        </li>
                        <?php
                    } else {
                        ?>
                        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                        <?php
                    }
                    ?>
                </ul>
            </div>
        </nav>

        <div class="container">
            <div>
                &nbsp;
            </div>
            <div id="Home_Screen" style="margin-top: 50px !important;">
                <div class="row">
                    <div class="col-md-9" id="topics_column">

                    </div>
                    <div class="col-md-3" id="_othercontrolls">

                    </div>

                </div>
            </div>
            <div id="topic_details" style="margin-top: 3%; display: none;">

            </div>
            <?php
//            echo 'Hai this is my first php application';
            $_SESSION['username'];
            $_SESSION['login_complete'];
            ?>
        </div>        

        <script src="https://cdn.tiny.cloud/1/9ko0ik0t36r5i3bne9h3j1w63jwm10tml8lhqoa51s85orm5/tinymce/5/tinymce.min.js"></script>
        <!--<script type="text/javascript" src="js/komain.js"></script>-->
        <script type="text/javascript" src="js/api_paths.js"></script>
        <script type="text/javascript" src="js/topicsmodel.js"></script>
        <script type="text/javascript" src="js/discussionsmodel.js"></script>
        <script type="text/javascript" src="js/utility.js"></script>
        <script>
//            tinymce.init({selector: '#topic_detail_feedback',
//                plugins: "image",
//                menubar: ["file", "edit", "view", "insert"]
//            });
//            console.log('TinyMCE is initialized');
        </script>
    </body>
</html>
