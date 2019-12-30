import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { FormEvent, useState, useEffect, useRef } from 'react';
import './App.scss';
import Main from './components/main';
import Blog from './components/blog';
import Illnesses from './components/illnesses';
import Stomachache from './components/stomachache';
const textareaLineHeight = 24;

const App: React.FC = () => {
  /* const [initialValue, setInitialValue] = useState<Array<string>>([
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  ]); */
  const [initialValue, setInitialValue] = useState<Array<string>>([]);
  const [layout, showLayout] = useState<boolean>(false);
  const [layoutValue, toggleLayout] = useState<string>('one');
  const [textAreaRows, setTextAreaRows] = useState<number>(3);
  const refs = useRef([
    React.createRef<HTMLTextAreaElement>(),
    React.createRef<HTMLTextAreaElement>(),
    React.createRef<HTMLTextAreaElement>()
  ]);

  function submit(e: FormEvent) {
    e.preventDefault();
    showLayout(true);
  }

  function handleInitialValueChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setInitialValue([event.target.value]);
    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);
    setTextAreaRows(currentRows);
  }

  function handleValueChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);
    setTextAreaRows(currentRows);
  }

  function handleValueBlur(event: React.ChangeEvent<HTMLTextAreaElement>, column: number) {
    const newValue = [...initialValue];
    newValue[column] = event.target.value;
    setInitialValue(newValue);
  }

  function changeLayout(layoutValue: string) {
      let newInitialValue = null;
    let initialValueString = initialValue.join(' ');
    let newValueArr = null;
    switch (layoutValue) {
      case 'two':
        newValueArr = initialValueString.split(' ');
        newInitialValue = [
          newValueArr.slice(0, newValueArr.length / 2).join(' '),
          newValueArr.slice(newValueArr.length / 2, newValueArr.length).join(' ')
        ];
        setInitialValue(newInitialValue);
        break;
      case 'three':
        newValueArr = initialValueString.split(' ');
        newInitialValue = [
          newValueArr.slice(0, newValueArr.length / 3).join(' '),
          newValueArr.slice(newValueArr.length / 3, (newValueArr.length / 3) * 2).join(' '),
          newValueArr.slice((newValueArr.length / 3) * 2, newValueArr.length).join(' ')
        ];
        setInitialValue(newInitialValue);
        break;
      default:
        newInitialValue = [initialValue.join(' ')];
        setInitialValue(newInitialValue);
        break;
    }
    toggleLayout(layoutValue);
  }

  useEffect(() => {
    if (layoutValue === 'one' && refs.current[0].current) {
      refs.current[0].current.value = initialValue[0];
    }
    if (layoutValue === 'two' && refs.current[0].current && refs.current[1].current) {
      refs.current[0].current.value = initialValue[0];
      refs.current[1].current.value = initialValue[1];
    }
    if (layoutValue === 'three' && refs.current[0].current && refs.current[1].current && refs.current[2].current) {
      refs.current[0].current.value = initialValue[0];
      refs.current[1].current.value = initialValue[1];
      refs.current[2].current.value = initialValue[2];
    }
    // set textarea rows every state change
    if (refs.current[0].current) {
      const currentRows = ~~(refs.current[0].current.scrollHeight / textareaLineHeight);
      setTextAreaRows(currentRows);
    }
  }, [layout, layoutValue, initialValue]);


    return (
    <div className="app">
        <Router>
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route path='/blog' component={Blog}/>
                <Route path='/illnesses' component={Illnesses}/>
                <Route path='/stomachache' component={Stomachache}/>
            </Switch>
        </Router>
    </div>
  );
};

export default App;
