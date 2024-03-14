"use client"
import React from 'react'
import SettingsIcon from './icons/i-settings'
import SettingsModal from './settings-modal';
import { settingsModalAtom } from '../_stateStore/atoms';
import { useAtom } from 'jotai/react';

export default function Settings() {
  const [settingsModal, setSettingsModal] = useAtom(settingsModalAtom);
  function toggleSettingsModal() {
    event?.preventDefault();
    event?.stopPropagation();
    setSettingsModal(true)
  }

  return (
    <>
      <div
        onClick={toggleSettingsModal}
        className="search mb-3 flex items-center cursor-pointer"
      >
        <label htmlFor="settingsButton" className="absolute p-1 cursor-pointer bg-base-300 rounded-full">
          <SettingsIcon className="w-5 h-5" />
        </label>
        <button
          // type="text"
          value="Settings"
          // readOnly
          className="whitespace-nowrap text-left overflow-hidden cursor-pointer h-8 w-5 rounded-full pl-8 py-1 text-sm bg-base-300 transition-all duration-500 hover:w-28 "
          id="settingsButton"
        >
          Settings
        </button>
      </div>
      <SettingsModal></SettingsModal>

    </>

  )
}
