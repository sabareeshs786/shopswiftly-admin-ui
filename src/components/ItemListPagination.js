import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import styled from '@emotion/styled';

export default function ItemListPagination({page, pageCount, handlePageChange}) {
    const MyPagination = styled(Pagination)({

    });
    return (
        <>
            <div className='pagination-container'>
                <div className='page-num-and-count'>
                    Page {page} of {pageCount}
                </div>
                <div className='pagination-content'>
                    <MyPagination
                        count={pageCount}
                        color="primary"
                        shape='rounded'
                        variant='outlined'
                        showFirstButton
                        showLastButton
                        page={page}
                        onChange={handlePageChange}
                    />
                </div>
                <div className='dummy-div'>
                </div>
            </div>
        </>
    );
}