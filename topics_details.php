<?php include("session_data.php"); ?>
<div style="text-align: right;"><a href="#" onclick="gotoMain();">Goto Home</a></div>
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
        </div>
    </div>
</div>
<div data-bind="foreach: {data: details, as: 'detail'}" class="topics_detail" style="margin-left: 2%;">
    <div style="" class="_detail">
        <div style="width: 95%; display: inline-block">
            <div style=" display: inline-block; width: 49%;">
                <span data-bind="html: '<b>'+written_by+'</b> says:' " style="float: left"></span>
                <BR>
                <span data-bind="html: '<i> on '+discussion_date+' :</i>'" style="float: left"></span>
            </div>
            <!-- ko if: marked_by_admin == '1'-->
            <div style=" display: inline-block; width: 49%;"><span class="glyphicon glyphicon-ok" style="color:green; font-size:2em; float: right;"></span></div>
            <!-- /ko -->
            <!-- ko if: marked_by_admin == '0'-->
            <div style=" display: inline-block; width: 49%;">
                <div class="checkbox" style="float: right;">
                    <!--<label><input type="checkbox" data-bind="click: $parent.descussionMarked, attr: {id:discussion_id}" id="">Mark It</label>-->
                    <label><input type="checkbox" onclick="descussionMarked(this);" data-bind=" attr: {id:discussion_id}" id="">Mark It</label>
                </div>
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
        <a href="#SUB_REPLY_DIV" style="float: right; margin-right: 2%; font-weight: 600; font-style: italic;"><span>REPLY</span></a>
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
                <option>Reply</option>
                <option>Feedback</option>
                <option>Question</option>
            </select>
            <BR>
            <label for="topic_detail_feedback">Comment:</label>
            <textarea id="topic_detail_feedback" class="form-control" ></textarea>
            <button type="button" class="btn btn-primary" data-bind="click: submitReply" style="margin-left: 93%; margin-top: 10px;">Submit</button>
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