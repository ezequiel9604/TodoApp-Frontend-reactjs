
import Header from "./Header/Header";

function Layout(props) {
    return (
        <main>
            <Header />
            <div className="main__section">
                { props.children }
            </div>
        </main>
    );
}

export default Layout;