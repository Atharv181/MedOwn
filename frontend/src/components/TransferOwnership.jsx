import React from 'react'
import { Switch } from '@headlessui/react'
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const TransferOwnership = (props) => {
    const [agreed, setAgreed] = useState(false);
    const [address , setAddress] = useState("");

    const transfer = () =>{
      props.TransferOwnership(address);
    }
 return (
    <>
    <div className="max-w-2xl mx-auto text-center w-9/12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Transfer Ownership
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          This is irreversible action & you are solely responsible
        </p>
      </div>
      <div className="mx-auto w-6/12 my-28">
        <label
          htmlFor="last-name"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Enter Address:
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            onChange = {(event) =>{setAddress(event.target.value)}}
            className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2 mt-2">
            <div className="flex items-center h-6">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-indigo-600' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to transfer{' '}
              <a href="#" className="font-semibold text-indigo-600">
                ownership {" "}
              </a>
              of smart contract to above address
            </Switch.Label>
          </Switch.Group>
      </div>
      <div className="mt-4 w-6/12 m-auto ">
          <button
            type="submit"
            className="block rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-auto"
            onClick={transfer}        
          >
            Transfer
          </button>
        </div>
    </>
  )
}

export default TransferOwnership