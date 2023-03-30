import Footer from "./footer";
import Nav from "./nav";

export default function Layout({children}){
    return(
        <div>
            <Nav></Nav>
            <main>{children}</main>
            <Footer></Footer>
        </div>
    )
}