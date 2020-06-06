import React, {FC, useState} from 'react'

interface IUserInfo {
    name: string,
    age: number
}

// TODO 1. type 自定义属性?
type IUserInfo1 = {
    name: string,
    age: 20
}

// ts对函数参数类型约束方式1: 缺陷 不能写接口声明以外的字段
// export default function Header({name, age}: IUserInfo1) {
//     return (
//         <div>
//             <p>{name}</p>
//             <p>{age}</p>
//         </div>
//     )
// }

// ts对函数参数类型约束方式2:
const Header: FC<IUserInfo1> = ({name, age, children}) => {
    return (
        <div>
            <p>{name}</p>
            <p>{age}</p>
            <div>{children}</div>
        </div>
    )
}

export default Header