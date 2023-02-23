import type { GetServerSideProps } from "next"

/** Add your relevant code here for the issue to reproduce */
export default function Home(props: any) {
  return (
    <>
      <p>{props.ip}</p>
      <p>{process.env.NEXT_PUBLIC_API_URL}</p>
      {/* <p>{process.env.API_URL || "(Not found)"}</p> */}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  console.log(process.env.API_URL)
  const resp = await fetch(process.env.API_URL, {headers: {
    "Accept": "application/json"
  }})
  return {
    props: {
      ip: (await resp.json()).ip
    }
  }
} 
