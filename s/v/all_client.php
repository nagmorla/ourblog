<?php

session_start();
if(!$_SESSION["username"]){
header("location:../../index.php");
}else{
$userlogin=$_SESSION["username"];
$role=$_SESSION["role"];
$adn=$_SESSION["adn"];
}

?>
<style>
    
    .modal-dialog{
        
        width:1080px !important;
    }
    
</style>

<?php include './header.php';?>
<script src="../../js/client_master.js"></script>
<script src="../../js-lib/ui-bootstrap-tpls-0.10.0.min.js"></script>

    <div role="main" class="container theme-showcase">
      <div class="" style="margin-top:30px;">
        <div class="col-lg-10">
			
            <div class="bs-component" ng-app="enquiry" ng-controller="ClientController" ng-init="getClientData()">	
                            
				<form class="form-inline">
			<div class="container">
    <ol class="breadcrumb breadcrumb-arrow">
		<li><a href="#">Client Master</a></li>		
		<li class="active"><span>All Clients</span></li>
	</ol>
</div>
                                    <div class="form-group">
                                        
                                        <label>Client Master Information</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label >Search</label>
						<input type="text" ng-model="search" class="form-control" placeholder="Search">
					</div> 
				</form>
				<table class="table table-responsive table-hover">
					<thead>
						<tr>
							<th ng-click="sort('type')">Client Name
								<span class="glyphicon sort-icon" ng-show="sortKey=='type'" ng-class="{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}"></span>
							</th>
							<th ng-click="sort('type')">Email
								<span class="glyphicon sort-icon" ng-show="sortKey=='type'" ng-class="{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}"></span>
							</th>
							<th ng-click="sort('name')">Mobile 
								<span class="glyphicon sort-icon" ng-show="sortKey=='name'" ng-class="{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}"></span>
							</th>
							<!--<th>Action&nbsp;</th>
						<!--<th>Action&nbsp;</th>
                                                <th>Action&nbsp;</th>
                                                <th>Action&nbsp;</th>-->

						</tr>
					</thead>
					<tbody>
						<tr dir-paginate="client in clients|orderBy:sortKey:reverse|filter:search|itemsPerPage:10">
							<td>{{client.name}}</td>
							<td>{{client.email}}</td>
							<td>{{client.mobile}}</td>
							<!--<td><button class="btn btn-primary" ng-click="editVendor(vendor.id)">EDIT</button></td>
                                                   <!--     <td><button class="btn btn-primary" ng-click="$event.stopPropagation();openModalWindow();">Send Vendors</button></td>
					<td><button class="btn btn-primary" ng-click="deleteData(this.user)">Send Quotation</button></td>-->
                                        
						</tr>
					</tbody>
				</table> 
				<dir-pagination-controls
					max-size="5"
					direction-links="true"
					boundary-links="true" >
				</dir-pagination-controls>
                        
                        
                        
			</div>
		</div>
		
      </div>
    </div>	
    


<?php include './footer.php';?>

           <script type="text/javascript" lang="javascript">
     $("#collapseTwo").addClass("collapse show");

</script>

