import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { FC } from 'react';

interface Item {
    image: string;
    name: string;
    price: number;
    color: string;
    _id: string;
}

const Card: FC<{ item: Item }> = ({ item }) => {
    return (
        <div className='border-[3px] bg-white  border-gray-200 lg:w-[305px] lg:h-[472px] rounded-lg'>
            <div>
                <img className='h-[200px] bg-white border-b-[1px] border-gray-200' src={item?.image} alt="" />
            </div>
            <div className='mx-3'>
                <div className='flex justify-between  my-4'>
                    <p className='w-[200px] font-semibold'>{item?.name}</p>
                    <h1 className='relative pt-1 top-2 text-sky-400 border-2 px-2 rounded-full border-sky-400 h-[30px] text-[13px] font-bold'>NEW</h1>
                </div>
                <p className=' text-[20px] text-sky-400 font-semibold'>€{item?.price}</p>
                <div className='my-4 h-[70px]'>
                    <p className=' text-[14px] font-semibold text-gray-500'>Available Colors:</p>
                    <p className=' w-[250px] font-semibold'>{item?.color}</p>
                </div>
                <div className='flex justify-between  h-[60px]'>
                    <Link to={`/customer/check-out/${item?._id}`} >
                        <div className=" flex w-[120px]   rounded-full items-center">
                            <Button className="focus:outline-none px-3 py-2" style={{ border: '1px solid #38bdf8', backgroundColor: '#38bdf8', color: 'white', fontSize: '15px', borderRadius: '100px 100px 100px 100px', padding: '20px 25px 20px 25px' }}>BUY NOW</Button>
                        </div>
                    </Link>
                    <Link to={`/customer/product-details/${item?._id}`}>
                        <div className=''>
                           <Button  style={{ border: '1px solid #38bdf8', backgroundColor: 'white', color: '#38bdf8', fontSize: '15px', borderRadius: '100px 100px 100px 100px', padding: '20px 25px 20px 25px' }}>VIEW MORE</Button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;