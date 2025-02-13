import { useEffect, useState } from "react";



const data = [{
    id: 1,
    name: "item 1",
    image: ["src1"],
    price: 10
},
{
    id: 2,
    name: "item 2",
    image: ["src2"],
    price: 20
},
{
    id: 3,
    name: "item 3",
    image: ["src3"],
    price: 20
},
{
    id: 4,
    name: "item 4",
    image: ["src4"],
    price: 20
},
{
    id: 5,
    name: "item 5",
    image: ["src5"],
    price: 20
},
{
    id: 6,
    name: "item 6",
    image: ["src6"],
    price: 20
}
];
const useVegetable = () => {
    const [vegetables, setVegetables] = useState(data);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setVegetables(data);
    }, []);


    return { vegetables, setVegetables, error, isLoading  };

}

export default useVegetable;