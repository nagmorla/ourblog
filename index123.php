<?php include("session_data.php"); ?>
<!DOCTYPE html>
<html>
    <head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <title><?php echo $blogtitle; ?></title>
        <?php
        $_SESSION['username'] = "";
        $_SESSION['login_complete'] = "";
        ?>
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

        <style>

            .nav-tabs {
                margin-bottom: 15px;
            }
            .sign-with {
                margin-top: 25px;
                padding: 20px;
            }
            div#OR {
                height: 30px;
                width: 30px;
                border: 1px solid #C2C2C2;
                border-radius: 50%;
                font-weight: bold;
                line-height: 28px;
                text-align: center;
                font-size: 12px;
                float: right;
                position: absolute;
                right: -16px;
                top: 40%;
                z-index: 1;
                background: #DFDFDF;
            }



        </style>


    </head>
    <body>
        <input type="hidden" id="login_user" name="login_user" value="<?= $username ?>"/>
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
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
                        <li><a href="#" data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-log-in"></span> Sign Up/Login</a></li>
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

            $("#loginbtn").click(function ()
            {
                alert('button clicked');
            }
            );




        </script>


        <!--   Sign Up/Model     -->

        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
             aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">X</button>
                        <h4 class="modal-title" id="myModalLabel">
                            Login/Registration </h4>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6" style="border-right: 1px dotted #C2C2C2;padding-right: 30px;">
                                <!-- Nav tabs -->
                                <ul class="nav nav-tabs">
                                    <li class="active"><a href="#Login" data-toggle="tab">Login</a></li>
                                    <li><a href="#Registration" data-toggle="tab">Registration</a></li>
                                </ul>
                                <!-- Tab panes -->
                                <div class="tab-content">
                                    <div class="tab-pane active" id="Login">
                                        <form role="form" class="form-horizontal">
                                            <div style="display: none; text-align: center; color: red; margin: 5px;" id="loginErrors"></div>
                                            <div class="form-group">
                                                <label for="email" class="col-sm-2 control-label">
                                                    Email</label>
                                                <div class="col-sm-8">
                                                    <input type="email" class="form-control" id="email1" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputPassword1" class="col-sm-2 control-label">
                                                    Password</label>
                                                <div class="col-sm-8">
                                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onkeyup="passwordKeyup();"/>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-2">
                                                </div>
                                                <div class="col-sm-10">
                                                    <button type="button" id="loginbtn" name="loginbtn" onclick="loginUser(this)" class="btn btn-primary btn-sm">Submit</button>
                                                    <a href="javascript:;">Forgot your password?</a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="tab-pane" id="Registration">
                                        <form role="form" class="form-horizontal">
                                            <div class="form-group">
                                                <label for="email" class="col-sm-2 control-label">
                                                    Name</label>



                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" placeholder="Name" />
                                                </div>

                                            </div>
                                            <div class="form-group">
                                                <label for="email" class="col-sm-2 control-label">
                                                    Email</label>
                                                <div class="col-sm-10">
                                                    <input type="email" class="form-control" id="email" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="mobile" class="col-sm-2 control-label">
                                                    Mobile</label>
                                                <div class="col-sm-10">
                                                    <input type="email" class="form-control" id="mobile" placeholder="Mobile" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="password" class="col-sm-2 control-label">
                                                    Password</label>
                                                <div class="col-sm-10">
                                                    <input type="password" class="form-control" id="password" placeholder="Password" />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-2">
                                                </div>
                                                <div class="col-sm-10">
                                                    <button type="button" class="btn btn-primary btn-sm">
                                                        Save & Continue</button>
                                                    <button type="button" class="btn btn-default btn-sm">
                                                        Cancel</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div id="OR" class="hidden-xs">
                                    OR</div>
                            </div>
                            <div class="col-md-4">
                                <div class="row text-center sign-with">
                                    <div class="col-md-12">
                                        <h3>
                                            Sign in with</h3>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="btn-group btn-group-justified">
                                            <a href="#" class="btn btn-primary">Facebook</a> <a href="#" class="btn btn-danger">
                                                Google</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>






    </body>
</html>
