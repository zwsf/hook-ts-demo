import React, {FC, useState, useCallback, useMemo} from 'react'

interface IArticleInfo {
    title: string,
    content?: string
}

const ChangeTitle: FC<IArticleInfo> = ({title, content}) => {
    const [article, setArticle] = useState<IArticleInfo>({title, content})

    // 条件article不改变，则updateTitle函数不重新生成
    const updateTitle = useCallback(
        () => setArticle({...article, title: Math.random() + 'test'}),
        [article]
    )

    const updateContent = useCallback(
        () => setArticle({...article, content: Math.random() + 'test'}),
        [article]
    )

    console.log('article: ', article)

    return (
        <div>
            <p>title: {article.title}</p>
            <button onClick={updateTitle}>设置文章标题</button>
            <div style={{marginBottom: '20px'}}></div>
            <button onClick={updateContent}>设置文章内容</button>
            <Button title={article.title}></Button>
            <ButtonMemo title={article.title}></ButtonMemo>
        </div>
    )
}

interface IUser {
    title: string
}

function Button(props: IUser) {

    function changeName(name: string) {
        console.log('change name suffix')
        return name + '--suffix'
    }

    return <div>
        <p>普通方式: {changeName(props.title)}</p>
    </div>
}

function ButtonMemo(props: IUser) {
    function changeName(name: string) {
        console.log('memo change name suffix')
        return name + '--suffix'
    }

    // 只要条件不发生改变，otherName的值将不再进行重新计算
    const otherName = useMemo(
        () => changeName(props.title),
        [props.title]
    )

    return <div>
        <p>memo方式: {otherName}</p>
    </div>
}

export default ChangeTitle