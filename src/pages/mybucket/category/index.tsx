import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";

function index() {
    return (
        <main>
            <Header rightCont={
                <>
                    <i>close</i>
                    <i>+</i>
                </>
            } />
            <Layout>
                <ol>
                    <li>
                        <button>delete</button>
                        <p>category</p>
                        <button>show</button>
                        <button>move</button>
                    </li>
                    <li>
                        <button>delete</button>
                        <p>category</p>
                        <button>show</button>
                        <button>move</button>
                    </li>
                    <li>
                        <button>delete</button>
                        <p>category</p>
                        <button>show</button>
                        <button>move</button>
                    </li>
                </ol>
            </Layout>
        </main>
    )
}

export default index;
