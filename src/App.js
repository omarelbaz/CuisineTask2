import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import './styles.css';
class App extends Component {
render() {
	return (
		<div className="App">
			<nav className="navbar navbar-expand-lg navbar-light navbar2">
			  <img src={require("./cuisine.png")} alt="Cuisine" />
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			  </button>
			  <div className="collapse navbar-collapse" id="navbarNavDropdown">
			    <ul className="navbar-nav ml-auto">
				  	<li className="nav-item">
				    	<a className="nav-link nav-active"href="/some/valid/uri#top">Business Day / Shift</a>
				  	</li>
			      <li className="nav-item dropdown">
			        <a className="nav-link dropdown-toggle"href="/some/valid/uri#top" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			          MODE: Takeaway
			        </a>
			        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
			          <a className="dropdown-item"href="/some/valid/uri#top">Action</a>
			          <a className="dropdown-item"href="/some/valid/uri#top">Another action</a>
			          <a className="dropdown-item"href="/some/valid/uri#top">Something else here</a>
			        </div>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link"href="/some/valid/uri#top">Order Queue</a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link"href="/some/valid/uri#top">Admin</a>
			      </li>
			    </ul>
			  </div>
			</nav>
			  <div className="row">
			    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 left-col-cust">
			      <div className="container">
					  <div className="row">
					    <div className="col-sm">
					    	<div className="dateTime" id="currentDate"></div>
					    </div>
					    <div className="col-sm">
					      <div className="dateTime" id="time"></div>
					    </div>
					    <div className="col-sm">
							<div className="dateTime">Minimum Charge 0.00</div>
					    </div>
					  </div>
					  <div className="row">
					    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 customerLeft">
							<h3>Takeaway #100</h3>
							<p className="customerSpecial">Ahmed Salom</p>
					    </div>
					    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
					      <button type="button" className="btn btn-danger btn-fullWidth">Customer Name</button>
					    </div>
					  </div>
					  <div className="row itemsTitle">
						  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-3">Qty</div>
						  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-3">Item</div>
						  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-2">Size</div>
						  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-2">Each</div>
						  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-2">Total</div>
					   </div>
					   <div className="row">
					   		<div className="col itemCount">No Items Currently in Order</div>
					   </div>
					   <div className="row itemList">
					   		<div className="col-xl-12 item-Place">
					      <button type="button" className="btn .btn-primary btn-circle"><i className="fas fa-plus"></i></button></div>
					   		<div className="col-xl-12">
					   			<div className="row">
								    <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3">
								      <button type="button" className="custom2 fastCash"><i className="fas fa-bolt"><br /><span className="fc">Fast Cash</span></i></button>
								    </div>
								    <div className="col-sm-12 col-md-12 col-lg-3 co-lxl-3">
								      <div className="row">
									    <div className="col-xl-12 payment2nd">
									      Discount: 0.00
									    </div>
									    <div className="col-xl-12 payment2nd">
									      SubCharge: 0.00
									    </div>
									    <div className="col-xl-12 payment2nd">
									      Tax: 0.00
									    </div>
									  </div>
								    </div>
								    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
								      <div className="row totalCost">
									    <div className="col-xl-12">
									      <h1>Total: 50.00</h1>
									    </div>
									    <div className="col-xl-12">
									      <p>Balance due: 50.00</p>
									    </div>
									  </div>
								    </div>
								  </div>
					   		</div>
					   		<div className="col-xl-12">
					   			<div className="row paymentType">
								  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-3">
								  	<button type="button" className="sec custom2"><i className="fas fa-times"><br />Cancel Order</i></button>
								  </div>
								  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-3">
								  	<button type="button" className="sec custom2"><i className="fas fa-percent selec"><br />Discount Order</i></button>
								  </div>
								  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-3">
								  	<button type="button" className="sec custom2"><i className="far fa-clock selec"><br />Hold Order</i></button>
								  </div>
								  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-3">
								  	<button type="button" className="sec custom2 custom3"><i className="fas fa-dollar-sign currentPay selec"><br />Pay</i></button>
								  </div>
								</div>
					   		</div>
					   </div>
					</div>
			    </div>
			    <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 right-col-cust">
			      <div className="row">
				    <div className="col">
				      <input type="text" className="myInput" placeholder="Search Item" />
				    </div>
				   </div>
				   <div className="itemSelection">
					<nav className="navbar navbar-light nav-bg-color" id="myActive">
		  				<a className="nav-item nav-link nav-border activeSelectionP1 pad padSp rightBor"href="/some/valid/uri#top" onclick="foodValueChanger()">Food</a>
					      <a className="nav-item nav-link nav-border pad rightBor"href="/some/valid/uri#top" onclick="beverageValueChanger()">Beverage</a>
					      <a className="nav-item nav-link nav-border pad rightBor"href="/some/valid/uri#top" onclick="marchandiseValueChanger()">Marchandise</a>
					      <a className="nav-item nav-link nav-border pad rightBor"href="/some/valid/uri#top" onclick="mealValueChanger()">Meal</a>
					      <a className="nav-item nav-link nav-border pad padNoBor"href="/some/valid/uri#top"><i className="fas fa-bars"></i></a>
					</nav>	
					<nav className="navbar navbar-light" id="myActiveBuBor">
		  				<a className="nav-item nav-link pad2 itemColor"href="/some/valid/uri#top" id="randValue1" onclick="breadValueChanger()">Breades</a>
					      <a className="nav-item nav-link  selectedType pad2 itemColor"href="/some/valid/uri#top" id="randValue2" onclick="pastaValueChanger()">Pastas</a>
					      <a className="nav-item nav-link pad2 itemColor"href="/some/valid/uri#top" id="randValue3" onclick="pizzaValueChanger()">Pizzas</a>
					      <a className="nav-item nav-link pad2 itemColor"href="/some/valid/uri#top" id="randValue4" onclick="soupValueChanger()">Soup</a>
					      <a className="nav-item nav-link pad2 itemColor"href="/some/valid/uri#top"><i className="fas fa-bars"></i></a>
					</nav>
						<button type="button" className="btn btn-secondary specialButton" id="btn-all1">Pasta</button>
						<button type="button" className="btn btn-secondary specialButton" id="btn-all2">Pasta</button>
						<button type="button" className="btn btn-secondary specialButton" id="btn-all3">Pasta</button>
						<button type="button" className="btn btn-secondary specialButton" id="btn-all4">Pasta</button>
						<button type="button" className="btn btn-secondary specialButton" id="btn-all5">Pasta</button>
						<button type="button" className="btn btn-secondary specialButton" id="btn-all6">Pasta</button>
						<button type="button" className="btn btn-secondary specialButton" id="btn-all7">Pasta</button>
						<button type="button" className="btn btn-secondary specialButton" id="btn-all8">Pasta</button>
						<button type="button" className="btn btn-secondary specialButton" id="btn-all9">Pasta</button>
						<button type="button" className="btn btn-secondary specialButton" id="btn-all10">Pasta</button>
						<button type="button" className="btn btn-secondary specialButton" id="btn-all11">Pasta</button>
						<button type="button" className="btn btn-secondary specialButton" id="btn-all12">Pasta</button>
						<button type="button" className="btn btn-secondary specialButton" id="btn-all13">Pasta</button>
						<button type="button" className="btn btn-secondary specialButton" id="btn-all14">Pasta</button>
						<button type="button" className="btn btn-secondary specialButton" id="btn-all15">Pasta</button>
						<button type="button" className="btn btn-secondary specialButton" id="btn-all16">Pasta</button>
						<button type="button" className="btn btn-secondary specialButton" id="btn-all17">Pasta</button>
						<button type="button" className="btn btn-secondary specialButton" id="btn-all18">Pasta</button>
						<button type="button" className="btn btn-secondary specialButton" id="btn-all19">Pasta</button>
						<button type="button" className="btn btn-secondary specialButton" id="btn-all20">Pasta</button>
					  </div>
					    </div>	
					    </div>	
					   </div>
					   );
			

}
}

 export default App;