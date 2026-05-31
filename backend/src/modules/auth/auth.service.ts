import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from '../users/users.service'

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(email: string, password: string, name: string, phone?: string) {
    const user = await this.usersService.create({ email, password, name, phone })
    const token = this.jwtService.sign({ sub: user.id, email: user.email, role: user.role })
    return { user, access_token: token }
  }

  async login(email: string, password: string) {
    const user = await this.usersService.validatePassword(email, password)
    if (!user) throw new UnauthorizedException('Invalid credentials')
    const token = this.jwtService.sign({ sub: user.id, email: user.email, role: user.role })
    return {
      user: { id: user.id, email: user.email, name: user.name, role: user.role },
      access_token: token,
    }
  }
}
