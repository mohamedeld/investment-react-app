


const UserInput = ({userInput,onHandleChange}) => {
    
  return (
    <section id="user-input">
        <div className='input-group'>
            <p>
                <label>Initial Investment</label>
                <input type="number" required value={userInput.initialInvestment} onChange={(e)=> onHandleChange('initialInvestment',e.target.value)}/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required value={userInput.annualInvestment} onChange={(e)=> onHandleChange('annualInvestment',e.target.value)}/>
            </p>
        </div>
        <div className='input-group'>
            <p>
                <label>Expected Return</label>
                <input type="number" required value={userInput.expectedReturn} onChange={(e)=> onHandleChange('expectedReturn',e.target.value)}/>
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required value={userInput.duration} onChange={(e)=> onHandleChange('duration',e.target.value)}/>
            </p>
        </div>
    </section>
  )
}

export default UserInput