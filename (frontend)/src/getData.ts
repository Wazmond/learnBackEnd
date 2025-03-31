export const GetData = async () => {
    const response = await fetch("http://localhost:5000/actors")
    return response
}