import Nav from "@/components/nav/Nav";

export default function MyButtList() {
    return (
        <section>
            <ul>
                <li onClick={() => console.log('goToDetail')}>a <button>delete</button></li>
                <li>b</li>
                <li>c</li>
            </ul>
            <button>add</button>
            <Nav />
        </section>
    )
}
