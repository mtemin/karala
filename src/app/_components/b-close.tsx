import React from 'react'
import { useAtom } from 'jotai/react';
import { archiveModalAtom } from '../_stateStore/atoms';
export default function CloseButton() {
  const [archiveModal, setArchiveModal] = useAtom(archiveModalAtom);

  return (
    <button onClick={() => { setArchiveModal(false) }}
      className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl">✕</button>

  )
}
