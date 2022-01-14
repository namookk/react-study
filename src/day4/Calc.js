function Calc({number}){
    const arr = [1,2,3,4,5,6,7,8,9];
    return (
        <div>
            {
                arr.map((i) => {
                    return (<p>
                        {number} * {i} = {number*i}
                    </p>)
                })
            }
        </div>
    );
};

export default Calc;