import {faCheck, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import {useTranslation} from "react-i18next";

import filesize from 'filesize';

import './InputUpload.scss';

const InputUpload = ({
  onChange,
  onRemove,
  acceptedFiled
}) => {
  const { t } = useTranslation();

  const onDrop = useCallback(
    (acptFiles, rjctFiles) => {
      onChange(acptFiles, rjctFiles);
    },
    [onChange]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: true
  });

  const remove = (name) => {
    onRemove(name);
  };

  return (
    <div>
      <div className="field-input file-upload">
        <div
          {...getRootProps()}
          className={`hc-file-input-dropzone ${acceptedFiled ? 'hc-file-input-dropzone-active' : ''}`}
        >
          <input {...getInputProps()} />
          {acceptedFiled ? acceptedFiled.map(file => (
            <div className="file-row">
              <FontAwesomeIcon
                className="file-check"
                icon={faCheck}
              />
              <span className="file-name">
                {`${file.name} (${filesize(265318, {round: 0})})`}
              </span>
              <FontAwesomeIcon
                className="file-remove"
                onClick={(e) => {
                  e.stopPropagation();
                  remove(file.name)
                }}
                icon={faTrashAlt}
              />
            </div>
          )) : null}
          <div className="file-placeholder">
              {`${t('file.placeholder')} `}
            <button type="button" className="btn-file-link">
                {t('file.browse')}
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default InputUpload;
