import React from "react";
import styles from "./css/register.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import '../../reset.css';
import { useState } from 'react';
import FileUpload from "./FileUpload";
import Transfer from './Transfer';


const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    zIndex: 1000,
}
const OVERLAY_STYLE = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.7)',
    zIndex: 1000
}

function Register({open, children, onClose}){
    /* 태그 생성 */
    const [tags, setTags] = useState([])
    const addTag = e => { 
        setTags([...tags,e.target.value])
    }
    const [tagtwo, setTagtwo] = useState([])
    const addTagtwo = e => { 
        setTagtwo([...tagtwo,e.target.value])
    }
    const [tagthree, setTagthree] = useState([])
    const addTagthree = e => { 
        setTagthree([...tagthree,e.target.value])
    }
    /* 태그 삭제 */
    function deleteTag(index){
        setTags(tags.filter((el,i)=>i !== index))
    }
    function deleteTagtwo(index){
        setTagtwo(tagtwo.filter((el,i)=>i !== index))
    }
    function deleteTagthree(index){
        setTagthree(tagthree.filter((el,i)=>i !== index))
    }
    /* modal */
    const [isFileOpen, setIsFileOpen] = useState(false);
    const [transfer, setTransfer] = useState(false);
    if (!open) return null
    return(
        <>
        <div style={OVERLAY_STYLE} />
        <div style={MODAL_STYLES}>
            {children}
        <div className={styles.registerArea}>
            <div className={styles.titlebox}>
                <section className={styles.titletext}>
                    <span>신규설문 등록</span>
                </section>
                <section className={styles.xbox} onClick={onClose}>
                    <a href="#">
                        <FontAwesomeIcon
                            icon={faTimes} className={`${styles.fa}${styles.faTimes}`}
                        />
                    </a>
                </section>
            </div>
            <form className={styles.form}>
                <dl className={styles.dl1}>
                    <dt><span>조사명</span></dt>
                    <dd>
                        <label></label>
                        <input type="text" placeholder="" name="" id="" />
                    </dd> 
                </dl>
                <dl className={styles.dl2}>
                    <dt><span>설문링크</span></dt>
                    <dd>
                        <input type="text" placeholder="설문 URL을 기입해주세요" name="" id="" />
                    </dd>
                </dl>
                <dl className={styles.dl3}>
                    <dt>
                        <span>필요샘플 수</span>
                        <input type="number" min="0" placeholder="숫자만 입력 가능합니다." name="" id="" />
                    </dt>    
                    <dd>
                        <span>참여포인트</span>
                        <input type="number" min="0" placeholder="숫자만 입력 가능합니다." name="" id="" />  
                    </dd>   
                </dl>
                <dl className={styles.dl4}>
                    <dt><span>발송패널 등록</span></dt>
                    <dd>
                        <div className={styles.fileupload} onClick={()=>{setIsFileOpen(true)}}>
                            <a href="#" >파일 등록</a>
                        </div>    
                        <FileUpload fileopen={isFileOpen} onClose={()=>setIsFileOpen(false)}/>
                        <p>8,545건</p>
                    </dd>
                </dl>
                <dl className={styles.dl5}>
                    <dt><span>요청기간</span></dt>
                    <dd className={styles.dataarea}>
                        <input type="date" data-placeholder="" required aria-required="ture"/> 
                        <span> ~ </span>
                        <input type="date" data-placeholder="" required aria-required="ture"/>
                    </dd>
                </dl>
                <dl className={styles.dl6}>
                    <dt className={styles.surveyProfile}>설문프로파일</dt>
                    <dd>
                        <ul>
                            <li className={styles.stepArea}>
                                <dt>1단계</dt>
                                <dd>
                                    <section className={styles.selectArea}>
                                        <select name="성별" required className={styles.selectbox} onChange={addTag}>
                                            <option value="" disabled selected>성별</option>
                                            <option value="남자" >남자</option>
                                            <option value="여자">여자</option>
                                        </select>
                                        <select name="나이" required className={styles.selectbox} onChange={addTag}>
                                            <option value="" disabled selected>나이</option>
                                            <option value="0 ~ 19세" >0 ~ 19세</option>
                                            <option value="20세 ~ 39세" >20세 ~ 39세</option>
                                            <option value="40세 ~ 59세" >40세 ~ 59세</option>
                                            <option value="60세 ~ " >60세 ~ </option>
                                        </select>
                                    </section>
                                    <section className={styles.tagWrapper}>
                                        <div className={styles.tagContainer}>
                                            {tags.map((tag, index) => {
                                            return (
                                                <div key={index} className={styles.tagbox}>
                                                    <div style={{fontSize:'16px',lineHeight:'16px',verticalAlign:'middle',padding:'3px'}}>{tag}</div>
                                                    <div className={styles.tagX} onClick={()=>deleteTag(index)}>
                                                    <FontAwesomeIcon
                                                        icon={faTimes} className={`${styles.fa}${styles.faTimes}`}
                                                    />
                                                    </div>  
                                                </div>
                                            )})}
                                        </div> 
                                    </section>
                                </dd>
                            </li>
                            <li className={styles.stepArea}>
                                <dt>2단계</dt>
                                <dd>
                                    <section className={styles.selectArea}>
                                        <select name="통신사" className={styles.selectbox}>
                                            <option value="" >통신사</option>
                                        </select>
                                        <select name="통신사선택" required className={styles.selectbox} onChange={addTagtwo}>
                                            <option value="SKT" selected >SKT</option>
                                            <option value="KT" >KT</option>
                                            <option value="U+" >U+</option>
                                            <option value="알뜰폰" >알뜰폰</option>
                                        </select>
                                    </section>
                                    <section className={styles.tagWrapper}>
                                         <div className={styles.tagContainer}>
                                            {tagtwo.map((tag, index) => {
                                            return (
                                                <div key={index} className={styles.tagbox}>
                                                    <div style={{fontSize:'16px',lineHeight:'16px',verticalAlign:'middle',padding:'3px'}}>{tag}</div>
                                                    <div className={styles.tagX} onClick={()=>deleteTagtwo(index)}>
                                                    <FontAwesomeIcon
                                                        icon={faTimes} className={`${styles.fa}${styles.faTimes}` }
                                                    />
                                                    </div>  
                                                </div>
                                            )})}
                                        </div> 
                                    </section>
                                </dd>
                            </li>
                            <li className={styles.stepArea}>
                                <dt>3단계</dt>
                                <dd>
                                    <section className={styles.selectArea}>
                                        <select name="전자기기" className={styles.selectbox}>
                                            <option value="">전자기기</option>
                                        </select>
                                        <select name="휴대폰기종" className={styles.selectbox}>
                                            <option value="">휴대폰기종</option>
                                        </select>
                                        <select name="기종선택" required className={styles.selectbox} onChange={addTagthree}>
                                            <option value="갤럭시S1" selected >갤럭시S1</option>
                                            <option value="갤럭시S20" >갤럭시S20</option>
                                            <option value="갤럭시노트20" >갤럭시노트20</option>
                                            <option value="아이폰13" >아이폰13</option>
                                        </select>
                                    </section>
                                    <section className={styles.tagWrapper}>
                                         <div className={styles.tagContainer}>
                                            {tagthree.map((tag, index) => {
                                            return (
                                                <div key={index} className={styles.tagbox}>
                                                    <div style={{fontSize:'16px',lineHeight:'16px',verticalAlign:'middle',padding:'3px'}}>{tag}</div>
                                                    <div className={styles.tagX} onClick={()=>deleteTagthree(index)}>
                                                    <FontAwesomeIcon
                                                        icon={faTimes} className={`${styles.fa}${styles.faTimes}` }
                                                    />
                                                    </div>  
                                                </div>
                                            )})}
                                        </div> 
                                    </section>
                                </dd>
                            </li>
                        </ul>
                    </dd>
                </dl>
            </form>
            <section className={styles.btnArea}>
                <button className={styles.saveBtn} onClick={()=>{setTransfer(true)}}>저장</button>
                <Transfer trans={transfer} onClose={()=>{setTransfer(false)}}/>
            </section>
        </div>
        </div>
        </>
    )
}

export default Register;