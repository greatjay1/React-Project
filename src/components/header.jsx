import React from "react";

function Header(){

const styles = {

header:{
    backgroundColor: "Blue",
    color: "white",
    paddingTop: "15px",
    paddingLeft: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
},

title:{
    margin:0,
    fontSize: "26px",
    marginBottom: "20px",
},

search:{
    padding: "5px 10px",
    border: "none",
    borderRadius: "4px",
    marginRight: "30px",
}
}


    return(

<header style={styles.header}>
<h1 style={styles.title}>Dashboard</h1>
<input type="text" placeholder="Search" style={styles.search}/>

</header>
    );
}

export default Header;