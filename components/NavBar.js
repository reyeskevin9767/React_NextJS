import Link from "next/link";

const NavBar = () => {

    const styles = {
        display: "flex",
        background: "grey",
        justifyContent: "space-between",
        padding: "1rem"
    }

    return(
    <div style={styles}>
        <Link href="/about"><a>About Page</a></Link>       
        <Link href="/contact"><a>Contact Page</a></Link>
        <Link href="/index"><a>Index Page</a></Link>
    </div>
    );
};


export default NavBar;