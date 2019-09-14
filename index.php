<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>My First Blog</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
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
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">My Company Logo and Name</a>
                </div>
                <!--                <ul class="nav navbar-nav">
                                    <li class="active"><a data-toggle="tab" href="#home_div">Home</a></li>
                
                                    <li><a data-toggle="tab" href="#about_div">About Us</a></li>
                                </ul>-->
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>
            </div>
        </nav>

        <div class="container">
            <div>
                Some info ...... like company agenda.
            </div>
            <div id="Home_Screen" style="margin-top: 50px !important;">
                <div class="row">
                    <div class="col-md-9">
                        <div data-bind="foreach: {data: topics, as: 'topic'}" class="topics_cont">
                            <div style="" class="_topic">
                                <div class="col-md-2 col-xs-3 p-0">
                                    <div class="blog-date"> 
                                        <span class="bdate" data-bind="html: t_day+'<BR>'+t_mon"></span>
                                        <span class="byear" data-bind="html: t_year"></span> 
                                    </div>
                                </div>
                                <div class="col-md-10">
                                    <a href="#" data-bind="click: $parent.gotoTopic"><span data-bind="text: subject"> </span></a><BR>
                                    <span data-bind="text: content"> </span><BR>
                                    <div class="pull-right"> <a href="#" data-bind="click: $parent.gotoTopic">READ MORE...</a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="side-bar">
                            <h4 class="sidebar-heading m-b-30 m-l-10 m-r-10">Categories</h4>
                            <ul class="cat-list">
                                <li class="m-b-10"><a href="https://mindmajix.com/denodo"><i class="fa fa-caret-right"></i>Data Science</a></li>
                                <li class="m-b-10"><a href="https://mindmajix.com/mongodb"><i class="fa fa-caret-right"></i>Machine Learning</a></li>
                                <li class="m-b-10"><a href="https://mindmajix.com/oracle-financials"><i class="fa fa-caret-right"></i>Artificial Intelligence</a></li>
                                <li class="m-b-10"><a href="https://mindmajix.com/oracle-odi"><i class="fa fa-caret-right"></i>Grafana</a></li>
                                <li class="m-b-10"><a href="https://mindmajix.com/checkpoint"><i class="fa fa-caret-right"></i>Tabview</a></li>
                            </ul>
                            <a href="https://mindmajix.com/blog-category" class="btn-60 btn bg-red f-s-14 m-t-50 m-b-20">VIEW MORE</a>
                        </div>

                        <div class="form-wrapper m-t-20" id="form_sticky" style="opacity: 4.276;">
                            <h4 class="sidebar-heading-center f-s-18 m-b-20">Drop us a Query</h4>
                            <div class="p-r-10 p-l-10">
                                <form action="https://mindmajix.com/form_insert" method="POST">

                                    <div class="row">
                                        <div class="col-md-12">
                                            <label for="fullname" class="floating-label">Full Name</label>
                                            <input type="text" required="" name="fullname"> 
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-12">
                                            <label for="email" class="floating-label">E-mail Address</label>
                                            <input type="email" name="email" required=""> 
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-12">
                                            <label for="course-name" class="floating-label">Course Name</label>
                                            <input type="text" name="course_name" required=""> 
                                        </div>
                                    </div>

                                    <span id="ierror" class="color-theme"></span>
                                    <div class="row">
                                        <div class="col-md-3 col-xs-3 p-r-0 country_code m-t-7">
                                            <select id="drop_cc" name="c_code" class="form-control">
                                                <option value="US" data-code="+1" data-text="United States">US</option>
                                                <option value="MZ" data-code="+258" data-text="Mozambique">Mozambique</option>
                                            </select>
                                        </div>
                                        <div class="col-md-2 col-xs-2 p-l-0 p-r-0">
                                            <label class="p-l-4 floating-label"></label>
                                            <input type="tel" id="drop_cval" name="phone_code" readonly="" value="" required=""> 
                                        </div>
                                        <div class="col-md-7 col-xs-7 p-l-0">
                                            <label class="p-l-4 floating-label">Phone Number *</label>
                                            <input type="tel" name="phone_number" onkeypress="return isNumberKey(event)" maxlength="15" required=""> 
                                        </div>
                                    </div>                    

                                    <div class="row">
                                        <div class="col-md-12">
                                            <label for="message" class="floating-label">Message</label>
                                            <textarea rows="2" name="message" maxlength="200"></textarea>
                                        </div>
                                    </div>

                                    <button type="submit" class="btn-60 btn bg-red waves-effect waves-light f-s-14">Contact Us</button>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div id="topic_details" style="margin-top: 3%;">
                <div style="text-align: right;"><a href="#" onclick="gotoMain();">Goto Home</a></div>
                <div>
                    <div data-bind="foreach: {data: topics, as: 'topic'}" class="topics_cont">
                        <span data-bind="text: subject"></span><BR>
                        <span data-bind="text: content"></span>
                    </div>
                </div>
            </div>
            <?php
//            echo 'Hai this is my first php application';
            ?>
        </div>        

        <script type="text/javascript" src="js/komain.js"></script>
        <script type="text/javascript" src="js/utility.js"></script>
    </body>
</html>
