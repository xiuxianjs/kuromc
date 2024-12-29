import React from 'react'
import util from '../../models/util'
export default function App() {
  return (
    <footer className="text-gray-300 py-6 absolute left-0 bottom-0 w-full ">
      <div className="text-center">
        <p>
          create by <span className="kuromc-text-title">kuromc-plugin</span> v
          <span className="italic">{util.version}</span>
        </p>
      </div>
    </footer>
  )
}
