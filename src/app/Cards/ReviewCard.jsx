import React from 'react';

const ReviewCard = ({rev}) => {
    return (
        <div className='p-8 text-center flex justify-center items-center btn'>
            {rev}
        </div>
    );
};

export default ReviewCard;