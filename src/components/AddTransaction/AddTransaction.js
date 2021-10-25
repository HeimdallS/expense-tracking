import React from 'react'

function AddTransaction() {
    return (
        <>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder="Enter Text..."></input>
                </div>
                <div>
                    <label htmlFor="amount">
                        Amount
                    </label>
                    <input type="number" placeholder="Enter Amount..."/>
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    )
}

export default AddTransaction
