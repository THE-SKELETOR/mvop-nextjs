function Blog({data}) {
    return (
        <div>
            <div>
                hello this is blog
            </div>
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    )
}


export async function getServerSideProps() {
    console.log("server side console log")

    const data = [
        {
            id: "1",
            title: "blog 1",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quibusdam incidunt doloremque fuga quod odit esse quos magni, temporibus repudiandae ipsum similique atque cumque recusandae, magnam sit, vero eveniet commodi!"
        },
        {
            id: "2",
            title: "blog 2",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laudantium inventore reprehenderit reiciendis fugiat sunt, esse in illum. Molestias veritatis vero repellendus explicabo temporibus numquam aliquam. Magnam quaerat animi eveniet?"
        }
    ]

    return {
      props: {data}, // will be passed to the page component as props
    }
  }