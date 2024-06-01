import {Component} from "react";

// 1. Mounting -> Монтирование
//           1. Вызов constructor
//           2. Вызов static getDerivedStateFromProps
//           3. Вызов render
//           4. Вызов componentDidMount

// 2. Updating -> Обновление
//           1. Вызов static getDerivedStateFromProps
//           2. Вызов shouldComponentUpdate
//           3. Вызов render
//           4. Вызов componentDidUpdate

// 3. Unmounting
//           1. Вызов componentWillUnmount

// 4. Error Handling -> Ошибки
//           1. Вызов getDerivedStateFromError <-   запаска (UI)
//           2. Вызов componentDidCatch

// N.B. - <ErrorBoundary/> - единственный классовый компонент который можно встретить в проекте

export class MyClassComponent extends Component {
    // Этапы жизненного цикла компонента
    // State by default
    constructor(props) {
        super(props);
        this.state = {}
    }
    static getDerivedStateFromProps(){

    }
    render() {
        return <div>

        </div>
    }
}