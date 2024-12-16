import {useState} from "react";
import {useDispatch} from "react-redux";
import {withdraw, deposit} from "../features/account/balanceSlice.ts"

import {fetchQuote} from "../features/api/qouteAction.ts";
import {AppDispatch} from "../app/store.ts";
import {useAppDispatch} from "../app/hooks.ts";


const Operation = () => {
    const [sum, setSum] = useState(1);
    const dispatch: AppDispatch = useAppDispatch();

    return (
        <>
            <div className={'flex justify-center'}>
                <button
                    className={'bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg text-lg'}
                    onClick={() => dispatch(withdraw(sum))}
                >Withdraw
                </button>
                <input
                    className={'text-center border rounded-lg'}
                    type={'number'}
                    onChange={e => setSum(+e.target.value)}
                    value={sum}
                />
                <button
                    className={'bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg text-lg'}
                    onClick={() => dispatch(deposit(sum))}
                >Deposit
                </button>
            </div>
            <div className={'flex justify-center'}>
                <button
                    onClick={() => dispatch(fetchQuote())}
                    className={'ml-7 bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-9 rounded-lg text-lg mt-1'}
                >Fetch Quote
                </button>
            </div>
        </>
    );
};

export default Operation;