import { usersRepo } from '../../helpers/users-repo';

const users = usersRepo.getAll();

export default (req, res) => {
    const results = req.query.q ? users.filter(user => user.firstName.toLowerCase().includes(req.query.q) || user.lastName.toLowerCase().includes(req.query.q) || user.email.toLowerCase().includes(req.query.q)) : []
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ results }))
}