import React from 'react';
import moment from 'moment';

moment.locale("ru");

class App extends React.Component {

    constructor(props) {
        super(props);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentWillMount(){
        console.log('app will load');
    }

    componentDidMount() {
        console.log('app loaded');
    }

    render() {
        if(this.props.params.articleName){
            return  (
                <div>
                    <div className="ui breadcrumb">
                        <a href="/blog-old" className="section">Блог</a>
                        <i className="right angle icon divider"/>
                    </div>
                    {this.props.children}
                </div>
            );
        }
        return (
            <div>
                {this.props.children}
            </div>
        )

    }
}

export default App;