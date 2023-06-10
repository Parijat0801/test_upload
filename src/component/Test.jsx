import React, { useState } from 'react'

function Test(props) {
  const [data, setData] = useState({ aSelected: props.selectedValue == 'a', bSelected: props.selectedValue == 'b', cSelected: props.selectedValue == 'c', dSelected: props.selectedValue == 'd', eSelected: props.selectedValue == 'e' })



  const handleChange = (e) => {
    const { checked, value } = e.target
    if (value == 'a') {
      setData({ aSelected: checked });
    }


    if (value == 'b') {
      setData({ bSelected: checked });
    }
    if (value == 'c') {
      setData({ cSelected: checked });
    }
    if (value == 'd') {
      setData({ dSelected: checked });
    }
    if (value == 'e') {
      setData({ eSelected: checked });
    }

  }
  return (
    <div className='div1'>
      <div class="dropdown">
        <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
        Multiselect dropdown
        </button>
        <form id='form' className="dropdown-menu p-4">
        <div class="mb-3">
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="dropdownCheck2" value="a"  onChange={handleChange}  defaultChecked={props.selectedValue == 'a'}
            disabled={data.aSelected || (!data.aSelected && !data.bSelected && !data.cSelected && !data.dSelected && !data.eSelected) ? false : true}/>
            <label class="form-check-label" for="dropdownCheck2">
            Australia
            </label>
          </div>
        </div>

        <div class="mb-3">
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="dropdownCheck2" value="b"  onChange={handleChange}  defaultChecked={props.selectedValue == 'b'}
            disabled={data.bSelected || (!data.aSelected && !data.bSelected && !data.cSelected && !data.dSelected && !data.eSelected) ? false : true}/>
            <label class="form-check-label" for="dropdownCheck2">
            Bermuda
            </label>
          </div>
        </div>

        <div class="mb-3">
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="dropdownCheck2" value="c"  onChange={handleChange}  defaultChecked={props.selectedValue == 'c'}
            disabled={data.cSelected || (!data.aSelected && !data.bSelected && !data.cSelected && !data.dSelected && !data.eSelected) ? false : true}/>
            <label class="form-check-label" for="dropdownCheck2">
            Canada
            </label>
          </div>
        </div>

        <div class="mb-3">
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="dropdownCheck2" value="d"  onChange={handleChange}  defaultChecked={props.selectedValue == 'd'}
            disabled={data.dSelected || (!data.aSelected && !data.bSelected && !data.cSelected && !data.dSelected && !data.eSelected) ? false : true}/>
            <label class="form-check-label" for="dropdownCheck2">
            Cameroon
            </label>
          </div>
        </div>

        <div class="mb-3">
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="dropdownCheck2" value="e"  onChange={handleChange}  defaultChecked={props.selectedValue == 'e'}
            disabled={data.eSelected || (!data.aSelected && !data.bSelected && !data.cSelected && !data.dSelected && !data.eSelected) ? false : true}/>
            <label class="form-check-label" for="dropdownCheck2">
            Denmark
            </label>
          </div>
        </div>

      </form>
    </div>
    </div >
  )
}
export default Test
