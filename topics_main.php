<?php include("session_data.php"); ?>
<form style="margin: 10px;">
    <div class="input-group">
        <input type="text" class="form-control" placeholder="Search" id="topics_search_filter">
        <div class="input-group-btn">
            <button class="btn btn-default" data-bind="click: searchTopics">
                <i class="glyphicon glyphicon-search"></i>
            </button>
        </div>
    </div>
</form>
<div data-bind="visible: topics().length > 0">
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
<!-- ko if: topics().length == 0 -->
<div>No data to display</div>
<!-- /ko -->
<ul class="pager">
    <li class="previous disabled" id="pagination_prev"><a href="#" data-bind="click: gotoPreviousPage">Previous</a></li>
    <li><span data-bind="html: currentPage "></span>&nbsp;of&nbsp;<span data-bind="html: totalPages"></span></li>
    <!-- ko if: totalPages == 1 -->
    <li class="next disabled" id="pagination_next"><a href="#" data-bind="click: gotoNextPage">Next</a></li>
    <!-- /ko -->
    <!-- ko ifnot: totalPages == 1 -->
    <li class="next" id="pagination_next"><a href="#" data-bind="click: gotoNextPage">Next</a></li>
    <!-- /ko -->
</ul>
<div style="border: 1px solid; margin: 2px; border-radius: 5px; padding: 10px;">
    <?php
    if ($loginComplete == "1") {
        ?>

        <div  class="form-group" style="margin-bottom: 10px;">
            <label for="topic_subject">Subject:</label>
            <input class="form-control" id="topic_subject"/>
            <BR>
            <label for="topic_categories">Topic Category:</label>
            <input list=categories id="topic_categories" class="form-control">
            <datalist id=categories>
                <option value="Datascience"></option>
                <option value="ML"></option>
            </datalist>
            <BR>
            <label for="new_topic">Topic Content:</label>
            <textarea id="new_topic"></textarea>
            <button type="button" class="btn btn-primary" data-bind="click: submitPost" style="margin-left: 93%; margin-top: 10px;">Submit</button>
        </div>
        <?php
    } else {
        ?>
        <div class="form-group" style="margin-bottom: 5px; ">
            <label>Please login to post new topics.</label>
        </div>
        <?php
    }
    ?>


</div>
<div>&nbsp;</div>