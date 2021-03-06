<?php include("session_data.php"); ?>
<div style="text-align: right;" id="home_screen_control"><a href="#" onclick="gotoMain();">Goto Home</a></div>
<div data-bind="foreach: {data: topics, as: 'topic'}" class="topics_cont">
    <div style="" class="_topic">
        <div class="col-md-2 col-xs-3 p-0">
            <div class="blog-date"> 
                <span class="bdate" data-bind="html: t_day+'<BR>'+t_mon"></span>
                <span class="byear" data-bind="html: t_year"></span> 
            </div>
        </div>
        <div class="col-md-10">
            <span data-bind="html: subject" style="font-weight: 600"> </span><BR>
            <span data-bind="html: content"> </span><BR>
            <a href="#SUB_REPLY_DIV" onclick="parentReplyLinkClicked(this);" style="float: right; margin-right: 2%; font-weight: 600; font-style: italic;"><span>REPLY</span></a>
        </div>
    </div>
</div>
<div data-bind="foreach: {data: details, as: 'detail'}" class="topics_detail" style="margin-left: 2%;">
    <div style="" class="_detail">
        <div style="width: 100%; display: inline-block">
            <div style=" display: inline-block; width: 48%;">
                <span data-bind="html: '<b>'+written_by+'</b> says:' " style="float: left"></span>
                <BR>
                <span data-bind="html: '<i> on '+discussion_date+' :</i>'" style="float: left"></span>
            </div>
            <?php
            if ($adminUser == "1") {
                ?>
                <!-- ko if: marked_by_admin == '1'-->
                <div style=" display: inline-block; width: 48%;">
                    <div class="checkbox" style="float: right;">
                        <label><input type="checkbox" checked="true" onclick="descussionMarked(this);" data-bind=" attr: {id:discussion_id}" id="">Mark It</label>
                    </div>
                </div>

                <!-- /ko -->
                <!-- ko if: marked_by_admin == '0'-->
                <div style=" display: inline-block; width: 48%;">
                    <div class="checkbox" style="float: right;">
                        <label><input type="checkbox" onclick="descussionMarked(this);" data-bind=" attr: {id:discussion_id}" id="">Mark It</label>
                    </div>
                </div>
                <!-- /ko -->
                <?php
            } else {
                ?>
                <!-- ko if: marked_by_admin == '1'-->
                <div style=" display: inline-block; width: 49%;"><span class="glyphicon glyphicon-ok" style="color:green; font-size:2em; float: right;"></span></div>
                <!-- /ko -->
                <!-- ko if: marked_by_admin == '0'-->
                <!--<div style=" display: inline-block; width: 49%;">
                    <div class="checkbox" style="float: right;">
                        <label><input type="checkbox" onclick="descussionMarked(this);" data-bind=" attr: {id:discussion_id}" id="">Mark It</label>
                    </div>
                </div> -->
                <!-- /ko -->
                <?php
            }
            ?>

            <!-- ko if: type == 'REPLY'-->
            <div style=" display: inline-block; width: 2%; float: right;">
                <label style="float: right; color: darkgreen; font-size: 5vh; font-family: serif;">A</label>
            </div> 
            <!-- /ko -->
            <!-- ko if: type == 'QUESTION'-->
            <div style=" display: inline-block; width: 2%; float: right;">
                <label style="float: right; color: darkred; font-size: 5vh; font-family: serif;">Q</label>
            </div> 
            <!-- /ko -->
            <!-- ko if: type == 'FEEDBACK'-->
            <div style=" display: inline-block; width: 2%; float: right;">
                <label style="float: right; color: blue; font-size: 5vh; font-family: serif;">F</label>
            </div> 
            <!-- /ko -->
        </div>
        <div>
            <!-- ko if: marked_by_admin == '0'-->
            <span data-bind="html: details"> </span><BR>
            <!-- /ko -->
            <!-- ko if: marked_by_admin == '1' -->
            <span data-bind="html: details" style="color: deepskyblue; font-weight: 600;"> </span><BR>
            <!-- /ko -->
        </div>
        <div data-bind="foreach: innerDetails" class="topics_detail" style="margin-left: 2%;">
            <div style="" class="sub_detail">
                <div style="width: 100%;"> 
                    <span data-bind="html: '<b>'+written_by+'</b> says:' " style="float: left"></span>
                    <BR>
                    <span data-bind="html: '<i> on '+discussion_date+' :</i>'" style="float: left"></span>
                    <BR>
                </div>
                <div>
                    <span data-bind="html: details"> </span><BR>
                </div>
            </div>
        </div>
        <a href="#SUB_REPLY_DIV" data-bind="attr: {id: discussion_id}" onclick="discussionReplyLinkClicked(this);" style="float: right; margin-right: 2%; font-weight: 600; font-style: italic;"><span>REPLY</span></a>
    </div>
    <!--    <div class="inner_details">
            <div data-bind="foreach: innerDetails" class="topics_detail" style="margin-left: 2%;">
                <div style="" class="_detail">
                    <div style="width: 95%;"> 
                        <span data-bind="html: '<b>'+written_by+'</b> says:' " style="float: left"></span>
                        <BR>
                        <span data-bind="html: '<i> on '+discussion_date+' :</i>'" style="float: left"></span>
                        <BR>
                    </div>
                    <div>
                        <span data-bind="html: details"> </span><BR>
                    </div>
                </div>
            </div>
        </div>-->
</div>
<div style="border: 1px solid; margin: 2px; border-radius: 5px; padding: 10px; margin-left: 2%;">
    <?php
    if ($loginComplete == "1") {
        ?>

        <div id="SUB_REPLY_DIV" class="form-group" style="margin-bottom: 5px; ">
            <label for="des_type">Type:</label>
            <select class="form-control" id="des_type">
                <option>REPLY</option>
                <option>FEEDBACK</option>
                <option>QUESTION</option>
            </select>
            <BR>
            <label for="topic_detail_feedback">Comment:</label>
            <textarea id="topic_detail_feedback" class="form-control" ></textarea>
            <div style="margin-top: 1%;">
                <div style="width: 75%; display: inline-block;">
                    <label style="font-style: italic; color: blue; font-weight: 500;">Note: You can drag & drop images in the editor.</label> 
                </div>
                <div style="width: 19%; display: inline-block; float: right;">
                    <button type="button" class="btn btn-primary" data-bind="click: submitReply" style="float: right;">Submit</button>
                </div>
            </div>
        </div>

        <?php
    } else {
        ?>
        <div id="SUB_REPLY_DIV" class="form-group" style="margin-bottom: 5px; ">
            <label>Please login to provide feedback/reply.</label>
        </div>
        <?php
    }
    ?>

</div>
<div>&nbsp;</div>