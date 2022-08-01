
import Header from "./header/Header";

function Layout(props) {
    return (
        <main>
            <Header />
            <div className="main__section">
                <div className="main__container">
                    { props.children }
                </div>
            </div>
        </main>
    );
}

export default Layout;