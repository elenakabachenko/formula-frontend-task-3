import React from 'react'
import { LoadingSmall } from '../';
import './style.scss'

export const SubmitButton = ({ disabled, text, isLoading }) =>
  <button className="btn-submit" disabled={disabled}>
    {
      !isLoading
        ? <span>{text}</span>
        : <LoadingSmall />
    }
  </button>