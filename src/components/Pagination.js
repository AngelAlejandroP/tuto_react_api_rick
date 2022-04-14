import React from 'react';

const Pagination = ({prev, next, onPrivious, onNext}) => {

    const handlePrevious = () => {
        onPrivious();
    }

    const handleNext = () => {
        onNext();
    }

    return (
        <nav className='mt-5'>
            <ul className='pagination justify-content-center'>
                { prev ? (
                    <li className='page-intem'>
                        <button className='page-link' onClick={handlePrevious}>
                            Previous
                        </button>
                    </li>
                ) : null }
                { next ? (
                    <li className='page-item'>
                        <button className='page-link' onClick={handleNext}>
                            Next
                        </button>
                    </li>
                ) : null }
            </ul>
        </nav>
    )
}


export default Pagination;