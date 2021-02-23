exports.uri = 'https://azdhebarol.pythonanywhere.com/api/v2/';
const uri = 'https://azdhebarol.pythonanywhere.com/api/v2/';

exports.getSliders = () => {
    return fetch(`${uri}sliders/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        
           
        }
    })
        .then(res => res.json())
    
}

exports.getSchedules = () => {
    return fetch(`${uri}schedules/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        
           
        }
    })
        .then(res => res.json())
    
}

exports.getLiveScore = () => {
    return fetch(`${uri}livescore/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        
           
        }
    })
        .then(res => res.json())
    
}



exports.getNews = () => {
    return fetch(`${uri}news/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        
           
        }
    })
        .then(res => res.json())
    
}

exports.getOnTheSpot = () => {
    return fetch(`${uri}onthespot/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        
           
        }
    })
        .then(res => res.json())
    
}

exports.getRules = () => {
    return fetch(`${uri}rules/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        
           
        }
    })
        .then(res => res.json())
    
}



exports.getResults = () => {
    return fetch(`${uri}results/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        
           
        }
    })
        .then(res => res.json())
    
}



exports.getCoordinators = () => {
    return fetch(`${uri}coordinators/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        
           
        }
    })
        .then(res => res.json())
    
}


exports.sendOtp = (id) => {
    return fetch(`${uri}otp/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        
           
        }
    })
        .then(res => res.json())
    
}

exports.verifyOtp = (otp,id) => {
    return fetch(`${uri}otp/${otp}/id/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        
           
        }
    })
        .then(res => res.json())
    
}

exports.getStudent = (id) => {
    console.log(`${uri}students/${id}/`)
    return fetch(`${uri}students/${id}/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        
           
        }
    })
        .then(res => res.json())
    
}


exports.getId = (en) => {
    return fetch(`${uri}id/${en}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        
           
        }
    })
        .then(res => res.json())
       
    
}




exports.getGames = () => {
    return fetch(`${uri}games/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        
           
        }
    })
        .then(res => res.json())
       
    
}


exports.getFlag = () => {
    return fetch(`${uri}flag/`, {
        method: "GET",
        headers: {
            "Content-Type":"application/json"
        },
    
    })
        .then(res => res.json())
     
}