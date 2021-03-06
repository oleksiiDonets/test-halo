import React from "react"
import classNames from 'classnames/bind';
import styles from './CustomInput.module.scss';

let cx = classNames.bind(styles);

export const CustomInput = ({
	type,
	placeholder,
	validation,
	changeHandler,
	blurHanler,
}) => {

	let error = false;
	let errorText = '';
	for( const key in validation.validation){
		if(validation.validation[key].error){
			error = true;
			errorText = validation.validation[key].errorText;
			break;
		}
	}
	const classString = cx({
		input: true,
		input_error: validation.isBlur && error,
		input_success: validation.isBlur && !error,
	});
	return (
		<>
			<input 
				value={validation.value}
				onChange={e => changeHandler(e)}
				onBlur={e => blurHanler(e) }
				type={type}
				placeholder={placeholder}
				className={classString}
			/>
			{

				(validation.isBlur && error) ? 
					<div className={styles.error}>{errorText}</div> 
					: <div className={styles.empty_error}></div>
			}
		</>
	)
}
