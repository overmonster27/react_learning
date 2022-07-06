export default function User({item, getPost}) {
    const onClick = () => {
        getPost(item.id);
    }

    return (
        <div>
            {item.name};
            <button onClick={onClick}>Click me</button>
        </div>
    )

}